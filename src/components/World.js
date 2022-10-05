import React from "react";
import DashboardPanel from "./DashboardPanel";
import { useWorldData } from "../context/WorldData";

export default function World() {
	const { allData } = useWorldData();

	return (
		<DashboardPanel>
			<div>
				<p>Total Population</p>
				<p>{allData["population"]}</p>
			</div>
		</DashboardPanel>
	);
}
