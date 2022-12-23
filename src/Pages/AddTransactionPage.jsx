import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTransactionActions } from '../Context/TransactionProvider';

const AddTransactionPage = ({ history }) => {
  const [transaction, setTransaction] = useState({
    id: null,
    desc: '',
    amount: '',
    type: 'income',
  });

  const { addTransaction, successNotify, warnNotify } = useTransactionActions();

  const changeHandler = (e) => {
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.value,
      id: Date.now(),
    });
  };

  const targetInput = useRef(null);

  useEffect(() => {
    targetInput.current.focus();
  }, []);

  const submitTransaction = (e) => {
    e.preventDefault();
    if (e.target.desc.value === '') {
      warnNotify();
    } else if (e.target.amount.value === '' || e.target.amount.value === '0') {
      warnNotify();
    } else {
      successNotify();
      addTransaction(transaction);
      setTransaction({ id: null, desc: '', amount: 0, type: 'income' });
      setTimeout(() => {
        history.push('/');
      }, 1800);
    }
  };

  return (
    <form
      className="mt-8 flex flex-col justify-center items-center"
      onSubmit={(e) => {
        submitTransaction(e);
      }}
    >
      <div>
        <h3 className="text-2xl mb-4">Add New Transaction</h3>
      </div>
      <div className="px-3">
        <input
          type="text"
          name="desc"
          placeholder="Description"
          ref={targetInput}
          className="outline-none w-full py-3 px-2 mt-4 border-none rounded-lg text-base text-gray-50 bg-gray-800 focus:ring-2  focus:ring-blue-500/[.55]"
          value={transaction.desc}
          onChange={changeHandler}
          autoComplete="off"
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          className="outline-none w-full py-3 px-2 mt-4 border-none rounded-lg text-base text-gray-50 bg-gray-800 focus:ring-2  focus:ring-blue-500/[.55]"
          value={transaction.amount}
          onChange={changeHandler}
        />
      </div>

      <div className="flex justify-center items-center m-2 gap-4 outline-none border-none mt-6">
        <div>
          <input
            type="radio"
            className="hidden"
            name="type"
            value="income"
            id="income"
            onChange={changeHandler}
            checked={transaction.type === 'income'}
          />
          <label htmlFor="income" className="rounded-lg py-2 px-3">
            Income
          </label>
        </div>
        <div>
          <input
            type="radio"
            className="hidden"
            name="type"
            value="expense"
            id="expense"
            onChange={changeHandler}
            checked={transaction.type === 'expense'}
          />
          <label htmlFor="expense" className="rounded-lg py-2 px-3">
            Expense
          </label>
        </div>
      </div>
      <div className="flex justify-center w-80 mt-3">
        <button
          type="submit"
          className="cursor-pointer mt-2 p-4 w-52 rounded-lg px-5 py-2.5 font-medium bg-blue-800 hover:bg-blue-900 focus:bg-blue-900"
        >
          ADD TRANSACTION
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default AddTransactionPage;
