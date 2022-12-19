import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

const TransactionContext = React.createContext();
const TransactionContextDispatcher = React.createContext();

const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  return (
    <TransactionContext.Provider value={transactions}>
      <TransactionContextDispatcher.Provider value={setTransactions}>
        {children}
      </TransactionContextDispatcher.Provider>
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => useContext(TransactionContext);
export const useTransactionActions = () => {
  const transactions = useContext(TransactionContext);
  const setTransactions = useContext(TransactionContextDispatcher);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteHandler = (id) => {
    const filterDeleteTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(filterDeleteTransactions);
  };

  const successNotify = () =>
    toast.success('Add New Transaction', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });

  const warnNotify = () => {
    toast.warn('Description or Amount not completed !', {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return { addTransaction, deleteHandler, successNotify, warnNotify };
};

export default TransactionProvider;
