import React, { useEffect, useState } from 'react';
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

const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

export const MyChart = () => {
  const [chartData, setChartData] = useState<any>(null);
  const todayLabel = new Date().toISOString().slice(0, 10);

  const fetchChartData = () => {
    fetch('/chart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': token || '',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('レスポンス:', res);
        if (res.status === 'ok') {
          const raw = res.data;
          console.log('取得データ:', raw);
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
  };

  useEffect(() => {
    fetchChartData(); // 初回読み込み

    const interval = setInterval(() => {
      fetchChartData(); // 定期的にデータ更新
    }, 10000); // 10秒ごとに取得

    return () => clearInterval(interval); // コンポーネントのアンマウント時にクリーンアップ
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#d4d4d4', // ラベルの色（明るめグレー）
          font: {
            size: 12,
            family: 'Segoe UI, sans-serif',
          },
        },
      },
      title: {
        display: true,
        text: 'EVM 進捗グラフ（PV / AC / EV）',
        color: '#ffffff',
        font: {
          size: 16,
          family: 'Segoe UI, sans-serif',
        },
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
            return label === todayLabel ? '#ff5e5e' : '#c0c0c0'; // 通常グレー、今日だけ赤
          },
          font: {
            size: 11,
            family: 'Consolas, monospace',
          },
        },
        grid: {
          color: '#333333',
        },
      },
      y: {
        ticks: {
          color: '#c0c0c0',
          font: {
            size: 11,
            family: 'Consolas, monospace',
          },
        },
        grid: {
          color: '#333333',
        },
      },
    },
  };


  if (!chartData) return <p>読み込み中...</p>;

  return (
        <div className="chart-wrapper" style={{ width: '100%', maxWidth: '900px', height: '450px' }}>
            <Line data={chartData} options={options} />
        </div>
      );
};

export default MyChart;
