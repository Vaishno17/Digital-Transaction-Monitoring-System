import { useEffect, useState } from 'react';
import axios from 'axios';
export default function FraudAlerts() {
  const [alerts, setAlerts] = useState([]);
  useEffect(() => {
    axios.get('/api/transactions/fraud').then(res => setAlerts(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Fraud Alerts</h2>
      <ul>{alerts.map(a => (
        <li key={a.id}>{a.transactionType} - ₹{a.amount} - {a.location}</li>
      ))}</ul>
    </div>
  );
}