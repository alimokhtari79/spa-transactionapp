import React, { useEffect, useState } from 'react';

import Transaction from '../Components/Transaction';
import Select from 'react-select';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  useTransaction,
  useTransactionActions,
} from '../Context/TransactionProvider';
import colorArray from '../utils/colorArray';
import { Link } from 'react-router-dom';
import MainHeader from '../Components/MainHeader';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = [
  { value: 'All', label: 'All' },
  { value: 'Income', label: 'Income' },
  { value: 'Expense', label: 'Expense' },
];

const selectStyles = {
  option: (provided) => ({
    ...provided,
    color: '#1f2732',
    padding: 10,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 140,
    display: 'flex',
    // border: '1px solid #1f2732',
    borderRadius: '0.5rem',
    backgroundColor: '#f2f2f2',
  }),
};

const AllTransactionsPage = ({ history }) => {
  const transactions = useTransaction();
  const { deleteHandler } = useTransactionActions();
  const [FilterTransactions, setFilterTransactions] = useState([]);
  const [searchTransaction, setSearchTransaction] = useState(transactions);
  const [selectedOptions, setSelectedOptions] = useState('All');
  const [chartData, setChartData] = useState({
    labels: transactions.map((data) => data.desc),
    datasets: [
      {
        label: 'Transaction',
        data: transactions.map((data) => data.amount),
        backgroundColor: colorArray.map((color) => color),
      },
    ],
  });

  const deleteTransactionHandler = (id) => {
    deleteHandler(id);
    history.push('/');
  };

  const handelSearch = (e) => {
    const searchValue = e.target.value;

    if (searchValue === '') {
      setFilterTransactions(transactions);
    } else {
      const filtered = searchTransaction.filter((entry) =>
        Object.values(entry).some(
          (val) => typeof val === 'string' && val.includes(searchValue)
        )
      );
      setFilterTransactions(filtered);
    }
  };

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

  useEffect(() => {
    filteredTransactions(selectedOptions.value);
  }, [selectedOptions]);

  const selectedHandler = (e) => {
    const selectedStatus = e.value;
    setSelectedOptions(e);
    filteredTransactions(selectedStatus);
  };

  return (
    <section className="w-full flex flex-col">
      <MainHeader />
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <h3
              style={{ letterSpacing: 2, fontSize: 18 }}
              className="hover:text-slate-400"
            >
              Transactions
            </h3>
          </Link>
        </div>
        <div>
          <Select
            styles={selectStyles}
            onChange={selectedHandler}
            value={selectedOptions}
            options={options}
          />
        </div>
      </div>
      <div>
        <input
          type="text"
          className="mt-4 border-b border-b-gray-500 focus:border-b-white transition ease-in-out delay-300 bg-transparent p-1"
          placeholder="Search"
          onChange={handelSearch}
        />
      </div>
      {FilterTransactions.length === 0 ? (
        <p className="text-base mt-4 text-center">Add Some Transaction</p>
      ) : (
        <div className="my-4 h-48 overflow-auto px-2">
          {FilterTransactions.map((transaction) => {
            return (
              <Transaction
                key={transaction.id}
                transaction={transaction}
                onDelete={() => deleteTransactionHandler(transaction.id)}
              />
            );
          })}
        </div>
      )}
      <div>
        <Doughnut data={chartData} />
      </div>
    </section>
  );
};

export default AllTransactionsPage;
