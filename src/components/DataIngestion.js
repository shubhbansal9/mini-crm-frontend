import React, { useState } from 'react';

function DataIngestion() {
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [orderData, setOrderData] = useState({
    customerId: '',
    amount: '',
    date: ''
  });

  const handleCustomerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customerData)
      });
      if (response.ok) {
        alert('Customer added successfully');
        setCustomerData({ name: '', email: '', phone: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });
      if (response.ok) {
        alert('Order added successfully');
        setOrderData({ customerId: '', amount: '', date: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Data Ingestion</h2>
      <div>
        <h3>Add Customer</h3>
        <form onSubmit={handleCustomerSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              value={customerData.name}
              onChange={(e) => setCustomerData({...customerData, name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={customerData.email}
              onChange={(e) => setCustomerData({...customerData, email: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Phone"
              value={customerData.phone}
              onChange={(e) => setCustomerData({...customerData, phone: e.target.value})}
            />
          </div>
          <button type="submit">Add Customer</button>
        </form>
      </div>

      <div style={{marginTop: '20px'}}>
        <h3>Add Order</h3>
        <form onSubmit={handleOrderSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Customer ID"
              value={orderData.customerId}
              onChange={(e) => setOrderData({...orderData, customerId: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Amount"
              value={orderData.amount}
              onChange={(e) => setOrderData({...orderData, amount: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              value={orderData.date}
              onChange={(e) => setOrderData({...orderData, date: e.target.value})}
            />
          </div>
          <button type="submit">Add Order</button>
        </form>
      </div>
    </div>
  );
}
export default DataIngestion;