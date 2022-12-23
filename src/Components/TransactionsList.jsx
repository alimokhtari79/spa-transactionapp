import React from 'react';
import {
  useTransaction,
  useTransactionActions,
} from '../Context/TransactionProvider';
import Transaction from './Transaction';

const TransactionsList = () => {
  const transactions = useTransaction();
  const slicedTransactions = transactions.slice(0, 4);
  const { deleteHandler } = useTransactionActions();
  return (
    <section className="w-full flex flex-col mt-4">
      {slicedTransactions.length === 0 ? (
        <p className="text-base mt-4 text-center">Add Some Transaction</p>
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
