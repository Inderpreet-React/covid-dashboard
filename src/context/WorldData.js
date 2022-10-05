import React, { useContext, useState } from "react";
import { RawData, deaths } from "./RawData";

const WorldData = React.createContext();

export const useWorldData = () => {
	return useContext(WorldData);
};

export function WorldDataProvider({ children }) {
	const allData = RawData;
	const Data = RawData["Global"]["All"];
	const deathData = Object.entries(deaths["All"]["dates"]);
	const allDeathData = [];

	deathData.forEach((data) => {
		allDeathData.push({ date: data[0], value: data[1] });
	});
	allDeathData.reverse();

	const value = { Data, allDeathData, allData };
	return <WorldData.Provider value={value}>{children}</WorldData.Provider>;
}
