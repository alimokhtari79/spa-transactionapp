import { Link } from 'react-router-dom';
import { useTransaction } from '../Context/TransactionProvider';

const TransactionsHeader = () => {
  return (
    <div className="transaction_header">
      <h3 style={{ letterSpacing: 2, fontSize: 18 }}>Transactions</h3>
      <Link to="/all-transaction" className="transaction-link">
        see all
      </Link>
    </div>
  );
};

export default TransactionsHeader;
