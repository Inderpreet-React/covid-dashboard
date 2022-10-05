import React, { useContext, useState } from "react";
import { RawData } from "./RawData";

const WorldData = React.createContext();

export const useWorldData = () => {
	return useContext(WorldData);
};

export function WorldDataProvider({ children }) {
	const [allData, setAllData] = useState(RawData["Global"]["All"]);

	const value = { allData };
	return <WorldData.Provider value={value}>{children}</WorldData.Provider>;
}
