import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios.get('/api/transactions').then(res => setTransactions(res.data));
  }, []);
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">All Transactions</h2>
      <ul>{transactions.map(t => (
        <li key={t.id}>{t.transactionType} - ₹{t.amount} - {t.isFraud ? 'FRAUD' : 'OK'}</li>
      ))}</ul>
    </div>
  );
}