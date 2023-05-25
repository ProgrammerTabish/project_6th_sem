import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import AdminLogin from "./components/AdminComp/AdminLogin";
import StudentLogin from "./components/StudentComp/StudentLogin";
import WatchmanLogin from "./components/WatchmanComp/WatchmanLogin";
import AccountForm from "./components/AdminComp/AddStudentAccount";
import AddStudentAccount from "./components/AdminComp/AddStudentAccount";
import AccountAdded from "./components/AdminComp/AccountAdded";
import AdminTable from "./components/AdminComp/VehicleLogsTable";
import AddWacthmanAccount from "./components/AdminComp/AddWacthman";
import VehicleTable from "./components/AdminComp/VehicleTable";
import SettingsPanel from "./components/AdminComp/SettingsPanel";
function App() {
  return (
    <div>
      <SettingsPanel />
      <VehicleTable />
      <AdminTable />
      <AccountAdded />
      <AccountForm />
      <AdminLogin />
      <AddWacthmanAccount /> <Navbar />
      <HomePage />
      <StudentLogin />
      <WatchmanLogin />
      <AddStudentAccount />
    </div>
  );
}

export default App;
