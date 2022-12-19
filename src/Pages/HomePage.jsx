import React from 'react';
import { ToastContainer } from 'react-toastify';
import OverView from '../Components/OverView';
import TransactionsList from '../Components/TransactionsList';
import { useTransactionActions } from '../Context/TransactionProvider';

const HomePage = () => {
  return (
    <>
      <OverView />
      <TransactionsList />
      <ToastContainer />
    </>
  );
};

export default HomePage;
