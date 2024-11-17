import React, { useState } from 'react';

function AudienceBuilder() {
  const [conditions, setConditions] = useState([
    { field: 'spending', operator: '>', value: '' }
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/audience', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conditions })
      });
      if (response.ok) {
        alert('Audience segment created successfully');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Audience Builder</h2>
      <form onSubmit={handleSubmit}>
        {conditions.map((condition, index) => (
          <div key={index} className="form-group">
            <select
              value={condition.field}
              onChange={(e) => {
                const newConditions = [...conditions];
                newConditions[index].field = e.target.value;
                setConditions(newConditions);
              }}
            >
              <option value="spending">Total Spending</option>
              <option value="visits">Number of Visits</option>
              <option value="lastVisit">Last Visit</option>
            </select>
            <select
              value={condition.operator}
              onChange={(e) => {
                const newConditions = [...conditions];
                newConditions[index].operator = e.target.value;
                setConditions(newConditions);
              }}
            >
              <option value=">">Greater than</option>
              <option value="<">Less than</option>
              <option value="=">=</option>
            </select>
            <input
              type="text"
              value={condition.value}
              onChange={(e) => {
                const newConditions = [...conditions];
                newConditions[index].value = e.target.value;
                setConditions(newConditions);
              }}
              placeholder="Value"
            />
          </div>
        ))}
        <button type="button" onClick={() => setConditions([...conditions, { field: 'spending', operator: '>', value: '' }])}>
          Add Condition
        </button>
        <button type="submit">Create Segment</button>
      </form>
    </div>
  );
}
export default AudienceBuilder;