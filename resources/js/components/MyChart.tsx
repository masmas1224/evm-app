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

  export const MyChart = () => {
    const todayLabel = '4/5';
    //   const today = new Date();
    //   const todayLabel = `${today.getMonth() + 1}/${today.getDate()}`;

    const data = {
      labels: ['4/1', '4/2', '4/3', '4/4', '4/5', '4/5', '4/5'],
      datasets: [
        {
          label: '計画値（PV）',
          data: [1, 2, 3, 4, 6,7,8],
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          tension: 0.3,
        },
        {
          label: '実績値（AC）',
          data: [1, 1.5, 2.5, 3, 3.5],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          tension: 0.3,
        },
        {
          label: '出来高（EV）',
          data: [1, 2, 2.5, 3.5, 4],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.3,
        }
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: 'EVM 進捗グラフ（PV / AC / EV）',
        },
      },
      scales: {
        x: {
          ticks: {
            callback: function (value: any, index: number, ticks: any) {
                const label = data.labels[value];
                if (label === todayLabel) {
                  return `本日:${label}`;
                }
              return label;
            },
            color: (context: any) => {
                const value = context.tick.value;
                const label = data.labels[value];
                return label === todayLabel ? 'red' : undefined;

            },
          },
        },
      },
    };

    return <Line data={data} options={options} />;
  };

  export default MyChart;
