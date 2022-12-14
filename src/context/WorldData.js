import React, { useContext, useEffect, useState } from "react";

const WorldData = React.createContext();

export const useWorldData = () => {
	return useContext(WorldData);
};

export function WorldDataProvider({ children }) {
	const [loading, setLoading] = useState(false);
	const [allData, setAllData] = useState(false);
	const [data, setData] = useState({});
	const [deathData, setDeathData] = useState(false);
	const [finalDeathData, setFinalDeathData] = useState({});
	const allDeathData = [];

	useEffect(() => {
		async function getData() {
			if (!allData) {
				setLoading(true);
				console.log("request send");
				await fetch("https://covid-api.mmediagroup.fr/v1/cases")
					.then((res) => res.json())
					.then((data) => setAllData(data));
			}
			if (!deathData) {
				console.log("2nd request send");
				await fetch(
					"https://covid-api.mmediagroup.fr/v1/history?country=Global&status=deaths"
				)
					.then((res) => res.json())
					.then((data) => setDeathData(Object.entries(data["All"]["dates"])));
			}
		}

		getData();

		if (allData) {
			setData(allData["Global"]["All"]);
		}
		if (deathData) {
			deathData.forEach((d) => {
				allDeathData.push({ date: d[0], value: d[1] });
			});
			setFinalDeathData(allDeathData.reverse());
			setLoading(false);
		}
	}, [allData, deathData]);

	const value = { data, allDeathData, allData, loading, finalDeathData };
	return <WorldData.Provider value={value}>{children}</WorldData.Provider>;
}
