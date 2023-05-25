import React, { useState } from "react";

const AddStudentAccount: React.FC = () => {
  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // TODO: Handle form submission logic
    console.log("UID:", uid);
    console.log("Email:", email);
    console.log("License Number:", licenseNumber);
    console.log("Password:", password);

    // Reset form fields
    setUid("");
    setEmail("");
    setLicenseNumber("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-6">Add Student Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="uid" className="block text-gray-700 font-bold mb-2">
              UID
            </label>
            <input
              type="text"
              id="uid"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter UID"
              value={uid}
              onChange={(event) => setUid(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="licenseNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              License Number
            </label>
            <input
              type="text"
              id="licenseNumber"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter license number"
              value={licenseNumber}
              onChange={(event) => setLicenseNumber(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentAccount;
