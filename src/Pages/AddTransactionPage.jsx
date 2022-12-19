import React, { useState } from 'react';
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
      className="transaction-form"
      onSubmit={(e) => {
        submitTransaction(e);
      }}
    >
      <div className="formText">
        <input
          type="text"
          name="desc"
          placeholder="Description"
          className="formText_input"
          value={transaction.desc}
          onChange={changeHandler}
          autoComplete="off"
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          className="formText_input"
          value={transaction.amount}
          onChange={changeHandler}
        />
      </div>

      <div className="radioBtns">
        <div>
          <input
            type="radio"
            name="type"
            value="income"
            id="income"
            onChange={changeHandler}
            checked={transaction.type === 'income'}
          />
          <label htmlFor="income">Income</label>
        </div>
        <div>
          <input
            type="radio"
            name="type"
            value="expense"
            id="expense"
            onChange={changeHandler}
            checked={transaction.type === 'expense'}
          />
          <label htmlFor="expense">Expense</label>
        </div>
      </div>
      <div className="addTransaction_container">
        <button type="submit" className="addTransaction_Btn">
          ADD TRANSACTION
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default AddTransactionPage;
