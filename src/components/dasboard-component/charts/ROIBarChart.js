import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import '../../../styles/Charts.scss';

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function ROIBarChart() {
  const data = {
    labels: ['Month 1', 'Month 3', 'Month 6', 'Month 9', 'Month 12'],
    datasets: [{
      label: 'ROI',
      data: [0, 80, 200, 310, 400],
      backgroundColor: '#3B82F6',
    }],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="chart-card">
      <h2 className="chart-title">ROI Impact Analysis</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
