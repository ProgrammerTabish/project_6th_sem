import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const AccountAdded: React.FC = () => {
  const [isAccountAdded, setIsAccountAdded] = useState(false);

  const handleAccountAdded = () => {
    setIsAccountAdded(true);

    // Reset the success message after 3 seconds
    setTimeout(() => {
      setIsAccountAdded(false);
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
        {isAccountAdded ? (
          <div className="flex items-center justify-center mb-4">
            <FaCheck className="text-green-500 text-4xl" />
          </div>
        ) : null}
        <h1 className="text-2xl font-bold mb-6">Add Account</h1>
        <button
          onClick={handleAccountAdded}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Student
        </button>
        <br />
        <br />
        <button
          onClick={handleAccountAdded}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Watchman
        </button>
        {isAccountAdded ? (
          <p className="text-green-500 mt-4">Account added successfully!</p>
        ) : null}
      </div>
    </div>
  );
};

export default AccountAdded;
