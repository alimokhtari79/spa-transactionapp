import React, { useEffect, useState } from 'react';
import { IoArrowUp, IoArrowDown } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useTransaction } from '../Context/TransactionProvider';

const OverView = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const transactions = useTransaction();

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((transaction) => {
      transaction.type === 'expense'
        ? (exp = exp + parseFloat(transaction.amount))
        : (inc = inc + parseFloat(transaction.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  return (
    <div className="flex flex-col w-full">
      <div className="mt-8 flex justify-between items-center">
        <div>
          <p className="text-2xl text-blue-500">Balance : {income - expense}</p>
        </div>
        <div>
          <Link to="/add-transaction">
            <button className="bg-gray-800 text-white rounded-lg text-sm py-2 px-6">
              Add
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center my-4 w-full">
        <div className="w-1/2 h-20 flex flex-col justify-between p-3 bg-gray-800 rounded-lg mr-8">
          <div className="flex justify-between">
            <p>Income</p>
            <div className="flex justify-center items-center rounded-lg p-1 bg-[#6fcf972d] text-[#6fcf97]">
              <IoArrowUp />
            </div>
          </div>
          <div>{income}</div>
        </div>

        <div className="w-1/2 h-20 flex flex-col justify-between p-3 bg-gray-800 rounded-lg">
          <div className="flex justify-between">
            <p>Expense</p>
            <div className="flex justify-center items-center rounded-lg p-1 bg-[#eb57572d] text-[#eb5757]">
              <IoArrowDown />
            </div>
          </div>
          <div>{expense}</div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
