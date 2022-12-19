import React from 'react';
import { IoArrowUp, IoArrowDown } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const OverView = () => {
  return (
    <div className="overViewContainer">
      <div className="overViewUp">
        <div>
          {/* <p className="balance">Balance : {income - expense}</p> */}
          <p className="balance">Balance : $ 1400</p>
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
          {/* <div>{income}</div> */}
          <div>$ 1500</div>
        </div>

        <div className="overViewDown_expenseAndIncome">
          <div className="expenseAndIncome_up">
            <p>Expense</p>
            <div className={`expenseAndIncome_icon expense_icon`}>
              <IoArrowDown />
            </div>
          </div>
          <div>$ 100</div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
