import React, { useContext, useState } from 'react';
import { useTransaction } from './TransactionProvider';

const FilterTransactionsContext = React.createContext();
const FilterTransactionsContextDispatcher = React.createContext();

const FilterTransactionsProvider = ({ children }) => {
  const [FilterTransactions, setFilterTransactions] = useState([]);
  return (
    <FilterTransactionsContext value={FilterTransactions}>
      <FilterTransactionsContextDispatcher value={setFilterTransactions}>
        {children}
      </FilterTransactionsContextDispatcher>
    </FilterTransactionsContext>
  );
};

export default FilterTransactionsProvider;

export const FilterTransactions = () => useContext(FilterTransactionsContext);
export const FilterTransactionsActions = () => {
  const FilterTransactions = useContext(FilterTransactionsContext);
  const setFilterTransactions = useContext(FilterTransactionsContextDispatcher);
  const transactions = useTransaction();

  const filteredTransactions = (status) => {
    switch (status) {
      case 'Income':
        setFilterTransactions(
          transactions.filter((transaction) => transaction.type === 'income')
        );
        break;
      case 'Expense':
        setFilterTransactions(
          transactions.filter((transaction) => transaction.type === 'expense')
        );
        break;
      default:
        setFilterTransactions(transactions);
    }
  };

  const selectedHandler = (e) => {
    const selectedStatus = e.value;
    // setSelectedOptions(e);
    filteredTransactions(selectedStatus);
  };

  return { filteredTransactions, selectedHandler };
};
