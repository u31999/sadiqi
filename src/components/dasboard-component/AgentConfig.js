import React, { useState } from 'react';
import '../../styles/AgentConfig.scss';

export default function AgentConfig() {
  const [agentName, setAgentName] = useState('نورة');
  const [model, setModel] = useState('Gemini 2.5 Flash');
  const [systemPrompt, setSystemPrompt] = useState(`أنت نورة، المساعدة الطبية...

= Current time is {{ $now }}

💌  نورة هنا لمساعدتك...
`);

  const handleSave = () => {
    // save logic
    alert('Saved!');
  };

  return (
    <div className="agent-config-container">
      <div className="header">
        <h2>اعدادت العميل: {agentName}</h2>
        <button onClick={handleSave}>Save Changes</button>
      </div>

      <div className="input-group">
        <label>الأسم</label>
        <input value={agentName} onChange={e => setAgentName(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Language Model</label>
        <input value={model} onChange={e => setModel(e.target.value)} />
      </div>

      <div className="section">
        <h4>نظام التعليمات</h4>
        <small>هذه مجموهة التعليمات الأساسية للوكيل الذكي. تأكد من انك تعدل بدقة وحذر.</small>
        <textarea
          rows={12}
          value={systemPrompt}
          onChange={e => setSystemPrompt(e.target.value)}
        />
      </div>

      <div className="section connected-tools">
        <h4>Connected Tools</h4>
        <div className="tools-grid">
          <div className="tool-card">
            <strong>Create Customer</strong>
            <p>Creates a new customer record in the Sahih Medical Airtable base.</p>
          </div>
          <div className="tool-card">
            <strong>Search Customers</strong>
            <p>Searches for existing customers in the Airtable base using a formula.</p>
          </div>
          <div className="tool-card">
            <strong>Calculator</strong>
            <p>Performs mathematical calculations.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h4>Memory Configuration</h4>
        {/* Optional memory config inputs */}
      </div>
    </div>
  );
}
