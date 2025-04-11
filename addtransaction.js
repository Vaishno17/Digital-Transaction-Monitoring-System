import { useState } from 'react';
import axios from 'axios';
export default function AddTransaction() {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Credit');
  const [location, setLocation] = useState('');

  const submit = async () => {
    await axios.post('/api/transactions', { transactionType: type, amount, location });
    alert("Transaction added");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Add New Transaction</h2>
      <input placeholder="Amount" onChange={e => setAmount(e.target.value)} />
      <input placeholder="Location" onChange={e => setLocation(e.target.value)} />
      <select onChange={e => setType(e.target.value)}>
        <option>Credit</option>
        <option>Debit</option>
      </select>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
