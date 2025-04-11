// resources/js/components/MyChart.tsx
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const data = {
    labels: ['月', '火', '水', '木', '金'],
    datasets: [
      {
        label: '工数（h）',
        data: [2, 4, 6, 3, 5],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  export default function MyChart() {
    return <Bar data={data} />;
  }
