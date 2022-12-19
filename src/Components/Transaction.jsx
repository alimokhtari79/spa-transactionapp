import React from 'react';
import { useTransactionActions } from '../Context/TransactionProvider';

const Transaction = ({ transaction, onDelete }) => {
  // const { deleteHandler } = useTransactionActions();
  return (
    <div className="transaction">
      <div className="transaction_left">
        <button onClick={onDelete}>delete</button>
        <p>{transaction.desc}</p>
      </div>
      <div
        className={`${
          transaction.type === 'income'
            ? 'transactionIncomeAmount'
            : 'transactionExpenseAmount'
        }`}
      >
        {`${transaction.type === 'income' ? '+' : '-'}$${transaction.amount}`}
      </div>
    </div>
  );
};

export default Transaction;
