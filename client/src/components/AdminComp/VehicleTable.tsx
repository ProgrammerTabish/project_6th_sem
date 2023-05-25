import React, { useState } from "react";

interface VehicleLog {
  UID: string;
  email: string;
  licenseNumber: string;
  password: string;
  isAllowed: boolean;
}

const VehicleTable: React.FC = () => {
  const [vehicleLogs, setVehicleLogs] = useState<VehicleLog[]>([
    {
      UID: "1",
      email: "example1@example.com",
      licenseNumber: "ABC123",
      password: "password1",
      isAllowed: true,
    },
    {
      UID: "2",
      email: "example2@example.com",
      licenseNumber: "DEF456",
      password: "password2",
      isAllowed: false,
    },
    {
      UID: "3",
      email: "example3@example.com",
      licenseNumber: "GHI789",
      password: "password3",
      isAllowed: true,
    },
    // Add more vehicle log data as needed
  ]);

  const toggleAllowance = (index: number) => {
    setVehicleLogs((prevLogs) => {
      const updatedLogs = [...prevLogs];
      updatedLogs[index].isAllowed = !updatedLogs[index].isAllowed;
      return updatedLogs;
    });
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">Parking Lots</h2>
        <div className="flex flex-row justify-center items-center space-x-4">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-bold">2-Wheeler Parking Lots</h3>
            <p className="text-3xl font-bold">{12}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-bold">4-Wheeler Parking Lots</h3>
            <p className="text-3xl font-bold">{22}</p>
          </div>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">UID</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">License Number</th>
            <th className="py-2 px-4 border-b">Password</th>
            <th className="py-2 px-4 border-b">Access</th>
          </tr>
        </thead>
        <tbody>
          {vehicleLogs.map((log, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="py-2 px-4 border-b">{log.UID}</td>
              <td className="py-2 px-4 border-b">{log.email}</td>
              <td className="py-2 px-4 border-b">{log.licenseNumber}</td>
              <td className="py-2 px-4 border-b">{log.password}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className={`${
                    log.isAllowed
                      ? "bg-green-500 hover:bg-green-700"
                      : "bg-red-500 hover:bg-red-700"
                  } text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline`}
                  onClick={() => toggleAllowance(index)}
                >
                  {log.isAllowed ? "Allow" : "Restrict"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleTable;
