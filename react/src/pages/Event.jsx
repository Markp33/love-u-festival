import React, { useState } from "react";
import { lineup } from "../data.js";
import LineupGrid from "../components/LineupGrid.jsx";

export default function Event() {
  const [selectedDay, setSelectedDay] = useState("zaterdag");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Festival Line-up</h1>

      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setSelectedDay("zaterdag")}
          className={`px-4 py-2 rounded ${
            selectedDay === "zaterdag"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Zaterdag
        </button>
        <button
          onClick={() => setSelectedDay("zondag")}
          className={`px-4 py-2 rounded ${
            selectedDay === "zondag"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Zondag
        </button>
      </div>

      <LineupGrid acts={lineup[selectedDay]} />
    </div>
  );
}
