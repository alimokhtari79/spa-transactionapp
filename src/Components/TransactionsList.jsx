import React from 'react';
import {
  useTransaction,
  useTransactionActions,
} from '../Context/TransactionProvider';
import Transaction from './Transaction';

const TransactionsList = () => {
  const transaction = useTransaction();
  const slicedTransactions = transaction.slice(0, 4);
  const { deleteHandler } = useTransactionActions();
  return (
    <section className={'Transactions'}>
      {slicedTransactions.length === 0 ? (
        <p className="addTransaction">Add Some Transaction</p>
      ) : (
        slicedTransactions.map((transaction) => {
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
