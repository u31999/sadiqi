

export default function ConversationDetail({ conversation }) {
  if (!conversation) {
    return (
      <div className="conversation-detail empty">
        <div className="placeholder">
          <i className="icon">💬</i>
          <h3>Select a conversation</h3>
          <p>Choose a conversation from the list to view its details.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="conversation-detail">
      <div className="header">
        <strong>{conversation.name}</strong>
        <p>Conversation ID: {conversation.tag}</p>
      </div>
      <div className="messages">
        {/* Replace with actual messages later */}
        <div className="message bot">Hi, how can I help you?</div>
        <div className="message user">My name is {conversation.name}.</div>
      </div>
      <div className="input-box">
        <input type="text" placeholder="Type a message to continue conversation..." />
      </div>
    </div>
  );
}
