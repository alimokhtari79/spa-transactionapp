import React from 'react';

const Transaction = ({ transaction, onDelete }) => {
  return (
    <div className="transaction flex items-center w-full h-10 my-4 rounded-lg bg-gray-800">
      <div className="transaction_left flex items-center w-full max-w-xs overflow-hidden h-full">
        <button
          onClick={onDelete}
          className="cursor-pointer px-2 bg-[#d11a2a] border-none outline-none h-full rounded-tl-lg rounded-bl-lg  hidden -translate-x-full"
        >
          delete
        </button>
        <p className="ml-4">{transaction.desc}</p>
      </div>
      <div
        className={`${
          transaction.type === 'income'
            ? 'text-[#6fcf97] mx-3'
            : 'text-[#eb5757] mx-3'
        }`}
      >
        {`${transaction.type === 'income' ? '+' : '-'}$${transaction.amount}`}
      </div>
    </div>
  );
};

export default Transaction;
