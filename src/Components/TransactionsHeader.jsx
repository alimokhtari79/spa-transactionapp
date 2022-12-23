import { Link } from 'react-router-dom';

const TransactionsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h3 style={{ letterSpacing: 2, fontSize: 18 }}>Transactions</h3>
      <Link to="/all-transaction" className="text-blue-500">
        see all
      </Link>
    </div>
  );
};

export default TransactionsHeader;
