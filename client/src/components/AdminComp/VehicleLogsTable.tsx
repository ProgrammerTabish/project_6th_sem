import React, { useState } from "react";

interface VehicleLog {
  uid: string;
  licenseNumber: string;
  name: string;
  loginTime: string;
  logoutTime: string;
  isAllowed: boolean;
}

const AdminTable: React.FC = () => {
  const [vehicleLogs, setVehicleLogs] = useState<VehicleLog[]>([
    {
      uid: "123",
      licenseNumber: "ABC123",
      name: "John Doe",
      loginTime: "2023-05-23 10:00 AM",
      logoutTime: "2023-05-23 11:30 AM",
      isAllowed: true,
    },
    {
      uid: "456",
      licenseNumber: "DEF456",
      name: "Jane Smith",
      loginTime: "2023-05-23 11:45 AM",
      logoutTime: "2023-05-23 01:00 PM",
      isAllowed: false,
    },
    {
      uid: "789",
      licenseNumber: "GHI789",
      name: "Robert Johnson",
      loginTime: "2023-05-23 02:15 PM",
      logoutTime: "2023-05-23 03:45 PM",
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
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">UID</th>
            <th className="py-2 px-4 border-b">License Number</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Login Time</th>
            <th className="py-2 px-4 border-b">Logout Time</th>
            <th className="py-2 px-4 border-b">Access</th>
          </tr>
        </thead>
        <tbody>
          {vehicleLogs.map((log, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="py-2 px-4 border-b">{log.uid}</td>
              <td className="py-2 px-4 border-b">{log.licenseNumber}</td>
              <td className="py-2 px-4 border-b">{log.name}</td>
              <td className="py-2 px-4 border-b">{log.loginTime}</td>
              <td className="py-2 px-4 border-b">{log.logoutTime}</td>
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

export default AdminTable;
