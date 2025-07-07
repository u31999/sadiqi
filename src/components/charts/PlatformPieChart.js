import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../../styles/Charts.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PlatformPieChart() {
  const data = {
    labels: ['Telegram', 'WhatsApp'],
    datasets: [{
      data: [1350, 800],
      backgroundColor: ['#3B82F6', '#10B981'],
    }],
  };

  return (
    <div className="chart-card">
      <h2 className="chart-title">Platform Distribution</h2>
      <Pie data={data} />
    </div>
  );
}
