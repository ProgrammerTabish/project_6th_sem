import React, { useState } from "react";

interface ParkingLotSettings {
  twoWheeler: number;
  smallFourWheeler: number;
}

const SettingsPanel: React.FC = () => {
  const [parkingLotSettings, setParkingLotSettings] =
    useState<ParkingLotSettings>({
      twoWheeler: 100,
      smallFourWheeler: 50,
    });

  const handleSettingsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "twoWheeler" | "smallFourWheeler"
  ) => {
    const { value } = event.target;

    setParkingLotSettings((prevSettings) => ({
      ...prevSettings,
      [type]: parseInt(value, 10),
    }));
  };

  const handleSave = () => {
    // Perform save logic here
    console.log("Settings saved:", parkingLotSettings);
  };

  const handleReset = () => {
    setParkingLotSettings({
      twoWheeler: 0,
      smallFourWheeler: 0,
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">Parking Lot Settings</h2>
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="twoWheeler" className="font-bold">
                Number of 2-Wheeler Parking Lots:
              </label>
              <input
                type="number"
                id="twoWheeler"
                value={parkingLotSettings.twoWheeler}
                onChange={(e) => handleSettingsChange(e, "twoWheeler")}
                className="px-4 py-2 border border-gray-300 rounded w-32 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="smallFourWheeler" className="font-bold">
                Number of Small Four-Wheeler Parking Lots:
              </label>
              <input
                type="number"
                id="smallFourWheeler"
                value={parkingLotSettings.smallFourWheeler}
                onChange={(e) => handleSettingsChange(e, "smallFourWheeler")}
                className="px-4 py-2 border border-gray-300 rounded w-32 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
