import React, { useState } from 'react';

function MessageSender() {
  const [message, setMessage] = useState({
    template: '',
    campaignName: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/messages/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
      });
      if (response.ok) {
        alert('Messages scheduled for sending');
        setMessage({ template: '', campaignName: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Send Messages</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Campaign Name"
            value={message.campaignName}
            onChange={(e) => setMessage({...message, campaignName: e.target.value})}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Message Template (use [Name] for personalization)"
            value={message.template}
            onChange={(e) => setMessage({...message, template: e.target.value})}
          />
        </div>
        <button type="submit">Send Messages</button>
      </form>
    </div>
  );
}
export default MessageSender;