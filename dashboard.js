import { Link } from 'react-router-dom';
export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <ul className="space-y-2">
        <li><Link to="/transactions">View Transactions</Link></li>
        <li><Link to="/add">Add Transaction</Link></li>
        <li><Link to="/fraud">Fraud Alerts</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/profile">User Profile</Link></li>
      </ul>
    </div>
  );
}