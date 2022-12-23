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
    <div className="overViewContainer">
      <div className="overViewUp">
        <div>
          <p className="balance">Balance : {income - expense}</p>
        </div>
        <div>
          <Link to="/add-transaction">
            <button className="showForm_btn">Add</button>
          </Link>
        </div>
      </div>

      <div className="overViewDown">
        <div className={`overViewDown_expenseAndIncome overViewDown_Income`}>
          <div className="expenseAndIncome_up">
            <p>Income</p>
            <div className={`expenseAndIncome_icon Income_icon`}>
              <IoArrowUp />
            </div>
          </div>
          <div>{income}</div>
        </div>

        <div className="overViewDown_expenseAndIncome">
          <div className="expenseAndIncome_up">
            <p>Expense</p>
            <div className={`expenseAndIncome_icon expense_icon`}>
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
