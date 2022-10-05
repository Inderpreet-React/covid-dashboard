import React from "react";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import World from "./components/World";
import Country from "./components/Country";

function App() {
	return (
		<div className="flex h-full w-full  gap-4 bg-gray-100 text-gray-600 md:h-screen md:p-6">
			{/* <Sidebar /> */}
			<Routes>
				<Route index element={<World />} />
				<Route path="/country" element={<Country />} />
			</Routes>
		</div>
	);
}

export default App;
