import React from 'react';
import {
  useTransaction,
  useTransactionActions,
} from '../Context/TransactionProvider';
import Transaction from './Transaction';

const TransactionsList = () => {
  const transaction = useTransaction();
  const { deleteHandler } = useTransactionActions();
  return (
    <section className={'Transactions'}>
      <div className={'transaction_header'}>
        <div>
          <h3 style={{ letterSpacing: 2, fontSize: 18 }}>Transactions</h3>
        </div>
      </div>
      {transaction.length === 0 ? (
        <p className="addTransaction">Add Some Transaction</p>
      ) : (
        transaction.map((transaction) => {
          return (
            <Transaction
              key={transaction.id}
              transaction={transaction}
              onDelete={() => deleteHandler(transaction.id)}
            />
          );
        })
      )}
    </section>
  );
};

export default TransactionsList;
