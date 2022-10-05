import React from "react";
import DashboardPanel from "./DashboardPanel";
import { useWorldData } from "../context/WorldData";
import DataWidget from "./DataWidget";
import CountryWiseData from "./CountryWiseData";
import TotalDeath from "./TotalDeath";

export default function World() {
	const { Data, allDeathData } = useWorldData();

	return (
		<DashboardPanel additionalClasses={"flex gap-4 flex-col md:flex-row"}>
			<CountryWiseData />
			<div className=" md:w-1/2">
				<div className="flex flex-wrap gap-1">
					<DataWidget name={"Population"} data={Data["population"]} />
					<DataWidget name={"Confirmed Cases"} data={Data["confirmed"]} />
					<DataWidget name={"Total Deaths"} data={Data["deaths"]} />
				</div>
				<TotalDeath />
			</div>
		</DashboardPanel>
	);
}
