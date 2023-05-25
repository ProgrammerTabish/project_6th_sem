import React, { useState } from "react";

const AddWacthman: React.FC = () => {
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform validation and submit the form data
    if (uid && name && password) {
      // Process the form data
      console.log("Form submitted:", { uid, name, password });

      // Reset the form fields
      setUid("");
      setName("");
      setPassword("");
    } else {
      // Display error message or perform other validation logic
      console.log("Please fill in all the required fields.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <div className="flex flex-col items-center py-8">
          <h2 className="text-2xl font-bold mb-4">Add Watchman Account</h2>
          <form className="w-64" onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="uid" className="block mb-1 font-medium">
                UID:
              </label>
              <input
                type="text"
                id="uid"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block mb-1 font-medium">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
            >
              Add Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddWacthman;
