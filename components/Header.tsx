import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white flex items-center justify-between px-4 py-3 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center space-x-4">
        <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="text-xl font-bold">ProdProcess App</span>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/settings">
          <a className="hover:text-gray-300">Settings</a>
        </Link>
        <button className="hover:text-gray-300">
          <span className="material-icons">notifications</span>
        </button>
        <Link href="/profile">
          <a className="hover:text-gray-300">
            <span className="material-icons">account_circle</span>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;