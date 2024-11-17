import React, { useState, useEffect } from 'react';

function CampaignHistory() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const response = await fetch('/api/campaigns');
      if (response.ok) {
        const data = await response.json();
        setCampaigns(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Campaign History</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Campaign Name</th>
            <th>Date</th>
            <th>Audience Size</th>
            <th>Sent</th>
            <th>Failed</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map(campaign => (
            <tr key={campaign.id}>
              <td>{campaign.name}</td>
              <td>{new Date(campaign.date).toLocaleDateString()}</td>
              <td>{campaign.audienceSize}</td>
              <td>{campaign.sent}</td>
              <td>{campaign.failed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CampaignHistory;