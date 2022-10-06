import React from "react";
import { useWorldData } from "../context/WorldData";

export default function CountryWiseData() {
	const { allData } = useWorldData();

	const countries = Object.keys(allData);

	return (
		<div className="relative h-[40rem] w-full table-fixed overflow-auto md:w-1/2">
			<table className="relative w-full overflow-y-scroll text-left text-sm text-gray-400">
				<thead className="sticky top-0  bg-gray-700 text-xs  uppercase text-gray-400">
					<tr>
						<th scope="col" className="py-3 px-4">
							Country
						</th>
						<th scope="col" className="py-3 px-4 text-center">
							Population
						</th>
						<th scope="col" className="py-3 px-4 text-center">
							Confirmed
						</th>
						<th scope="col" className="py-3 px-4 text-center">
							Deaths
						</th>
						<th scope="col" className="py-3 px-4 text-center">
							life Expectancy
						</th>
					</tr>
				</thead>
				<tbody>
					{countries.map((data) => {
						return (
							<tr key={data} className="border-b border-gray-700 bg-gray-800">
								<th
									scope="row"
									className="whitespace-nowrap py-4 px-4 font-medium  text-white"
								>
									{data}
								</th>
								<td className="py-4 px-4 text-center">
									{allData[data]["All"]["population"] || "-"}
								</td>
								<td className="py-4 px-4 text-center">
									{allData[data]["All"]["confirmed"] || "-"}
								</td>
								<td className="py-4 px-4 text-center">
									{allData[data]["All"]["deaths"] || "-"}
								</td>
								<td className="py-4 px-4 text-center">
									{allData[data]["All"]["life_expectancy"] || "-"}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
