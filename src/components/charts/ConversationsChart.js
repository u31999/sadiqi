import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import '../../styles/Charts.scss';


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function ConversationsChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'conversations',
      data: [400, 300, 600, 800, 750, 900],
      borderColor: '#3B82F6',
      backgroundColor: 'transparent',
      tension: 0.4,
    }],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="chart-card">
      <h2 className="chart-title">Conversations Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
}
