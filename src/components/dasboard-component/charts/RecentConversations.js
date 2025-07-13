import '../../../styles/Charts.scss';

const mockConversations = [
  { name: 'Ali Hassan', message: 'Thank you for your help, Nora!', status: 'Resolved' },
  { name: 'Fatima Ahmed', message: 'Can you tell me about your home nursing services?', status: 'Active' },
  { name: 'Khalid Al-Saud', message: 'The provided link is not working.', status: 'Escalated' },
  { name: 'Sara Ibrahim', message: 'Perfect, thank you!', status: 'Resolved' },
];

export default function RecentConversations() {
  return (
    <div className="chart-card recent">
      <h2 className="chart-title">Recent Conversations</h2>
      {mockConversations.map((item, index) => (
        <div className="conversation" key={index}>
          <div>
            <strong>{item.name}</strong>
            <p>{item.message}</p>
          </div>
          <span className={`badge ${item.status.toLowerCase()}`}>{item.status}</span>
        </div>
      ))}
    </div>
  );
}
