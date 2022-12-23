import React from 'react';
import { ToastContainer } from 'react-toastify';
import OverView from '../Components/OverView';
import TransactionsList from '../Components/TransactionsList';
import TransactionsHeader from '../Components/TransactionsHeader';

const HomePage = () => {
  return (
    <>
      <OverView />
      <TransactionsHeader />
      <TransactionsList />
      <ToastContainer />
    </>
  );
};

export default HomePage;
