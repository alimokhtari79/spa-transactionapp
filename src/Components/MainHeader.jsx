import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className="flex h-10 justify-center items-center m-5 outline-none border-none">
      <Link to="/" className="outline-none border-none">
        <h1 className="text-3xl hover:text-gray-400 outline-none border-none">
          Transaction App
        </h1>
      </Link>
    </header>
  );
};

export default MainHeader;
