import React from "react";
import { useWorldData } from "../context/WorldData";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

export default function TotalDeath() {
	const { finalDeathData } = useWorldData();

	return (
		<>
			<h1 className="ml-4 mt-4 text-2xl font-bold">Total Deaths Chart</h1>

			<div className="w-full p-4 text-xs md:text-sm">
				<ResponsiveContainer width="100%" aspect={2 / 1}>
					<AreaChart
						width={730}
						height={250}
						data={finalDeathData}
						margin={{ top: 0, right: 0, left: 10, bottom: 20 }}
					>
						<defs>
							<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
								<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
							</linearGradient>
						</defs>
						<XAxis dataKey="date" />
						<YAxis />
						<CartesianGrid strokeDasharray="3 3" />
						<Tooltip />
						<Area
							type="monotone"
							dataKey="value"
							stroke="#8884d8"
							fillOpacity={1}
							fill="url(#colorUv)"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</>
	);
}
