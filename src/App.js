import React from "react";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import World from "./components/World";
import Country from "./components/Country";

function App() {
	return (
		<div className="flex h-screen w-full bg-gray-100 text-gray-600 md:p-2">
			<Sidebar />
			<Routes>
				<Route index element={<World />} />
				<Route path="/country" element={<Country />} />
			</Routes>
		</div>
	);
}

export default App;
