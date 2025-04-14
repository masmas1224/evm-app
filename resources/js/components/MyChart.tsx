// resources/js/components/MyChart.tsx
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  import React, { useEffect, useState } from 'react';
  const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

  export const MyChart = () => {
    const [chartData, setChartData] = useState<any>(null);

    const todayLabel = new Date().toISOString().slice(0, 10); // 例: '2025-04-14'

    useEffect(() => {
      fetch('/chart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': token || '',
        },
      })
        .then((res) => res.json())
        .then((res) => {
            console.log('レスポンス:', res); // ← ココ追加！
          if (res.status === 'ok') {
            const raw = res.data;
            console.log('取得データ:', raw); // ← ココ追加！
            setChartData({
              labels: raw.map((r: any) => r.date),
              datasets: [
                {
                  label: '計画値（PV）',
                  data: raw.map((r: any) => r.pvHours ?? 0),
                  borderColor: 'rgba(54, 162, 235, 1)',
                  backgroundColor: 'rgba(54, 162, 235, 0.2)',
                  tension: 0.3,
                },
                {
                  label: '実績値（AC）',
                  data: raw.map((r: any) => r.acHours ?? 0),
                  borderColor: 'rgba(255, 99, 132, 1)',
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  tension: 0.3,
                },
                {
                  label: '出来高（EV）',
                  data: raw.map((r: any) => r.evHours ?? 0),
                  borderColor: 'rgba(75, 192, 192, 1)',
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  tension: 0.3,
                },
              ],
            });
          }
        })
        .catch(console.error);
    }, []);

    const options = {
      responsive: true,
      plugins: {
        legend: { position: 'top' as const },
        title: {
          display: true,
          text: 'EVM 進捗グラフ（PV / AC / EV）',
        },
      },
      scales: {
        x: {
          ticks: {
            callback: function (value: any) {
              const label = chartData?.labels?.[value];
              return label === todayLabel ? `本日:${label}` : label;
            },
            color: function (context: any) {
              const label = chartData?.labels?.[context.tick.value];
              return label === todayLabel ? 'red' : undefined;
            },
          },
        },
      },
    };

    if (!chartData) return <p>読み込み中...</p>;

    return <Line data={chartData} options={options} />;
  };

  export default MyChart;
