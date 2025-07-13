import ConversationList from './ConversationPage/ConversationList';
import ConversationDetail from './ConversationPage/ConversationDetail';
import '../../styles/conversation.scss';
import { useState } from 'react';


export default function ConversationPage() {
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <div className="conversation-page">
      <ConversationList onSelect={setSelectedConversation} selectedId={selectedConversation?.id} />
      <ConversationDetail conversation={selectedConversation} />
    </div>
  );
}
