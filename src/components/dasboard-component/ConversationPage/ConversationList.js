import React from 'react';

const mockConversations = [
  {
    id: 1,
    name: 'Ali Hassan',
    platform: 'Telegram',
    platformId: 'TELEGRAM-123456789',
    lastMessage: 'Thank you for your help, Nora!',
    date: '7/5/2024',
  },
  {
    id: 2,
    name: 'Fatima Ahmed',
    platform: 'WhatsApp',
    platformId: 'WHATSAPP-987654321',
    lastMessage: 'Can you tell me about your home nursing services?',
    date: '7/5/2024',
  },
  {
    id: 3,
    name: 'Khalid Al-Saud',
    platform: 'Telegram',
    platformId: 'TELEGRAM-112233445',
    lastMessage: 'The provided link is not working.',
    date: '7/4/2024',
  },
];

export default function ConversationList({ onSelect, selectedId }) {
  return (
   <div className="conversation-list">
      <h2>Archived Conversations</h2>
      <input type="text" className="search" placeholder="Search conversations..." />

      {mockConversations.map((conv) => (
        <div
          key={conv.id}
          className={`conversation-preview ${selectedId === conv.id ? 'active' : ''}`}
          onClick={() => onSelect(conv)}
        >
          <div className="top">
            <strong>{conv.name}</strong>
            <span>{conv.timestamp}</span>
          </div>
          <p>{conv.lastMessage}</p>
          <div className="meta">
            <span className={`channel ${conv.platform.toLowerCase()}`}>{conv.platform}    </span>
            <span>المعرف: {conv.platformId}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
