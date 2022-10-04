import React, { useState, useEffect, memo } from "react";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

function Sidebar() {
	const [showSideBar, setShowSideBar] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const activeStyles = {
		backgroundColor: "rgb(99 102 241)",
		color: "rgb(243 244 246)",
	};

	const setDimension = () => {
		setWindowWidth(window.innerWidth);
	};

	function sidebarHandler() {
		setShowSideBar(!showSideBar);
		console.log("ran");
	}

	useEffect(() => {
		window.addEventListener("resize", setDimension);
		console.log("useEffect ran");

		if (windowWidth > 768) {
			setShowSideBar(true);
		}

		return () => {
			window.removeEventListener("resize", setDimension);
		};
	}, [windowWidth]);

	return (
		<div
			className={`fixed top-0 -left-full z-10 flex h-full w-1/2 flex-col border-2 border-gray-800 bg-indigo-200 p-4 font-bold text-gray-700 transition-all md:relative md:w-1/6 ${
				showSideBar ? "-left-0" : ""
			}`}
		>
			<h1 className="text-2xl">Covid Tracker</h1>

			<ul className="align-center flex h-2/3 flex-col justify-center gap-4">
				<NavLink
					end
					style={({ isActive }) => (isActive ? activeStyles : undefined)}
					className="rounded py-2 px-2 text-xl underline underline-offset-8"
					to=""
				>
					World
				</NavLink>
				<NavLink
					style={({ isActive }) => (isActive ? activeStyles : undefined)}
					className="rounded py-2 px-2 text-xl underline underline-offset-8"
					to="country"
				>
					Country
				</NavLink>
			</ul>
			<div
				onClick={sidebarHandler}
				className="fixed bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500 p-2 md:hidden"
			>
				<Bars4Icon className="h-6 w-6 rounded-full text-white" />
			</div>
		</div>
	);
}

export default memo(Sidebar);
