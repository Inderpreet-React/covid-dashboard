import React from "react";

export default function DataWidget(props) {
	return (
		<div className="h-fit w-full border-2 border-gray-700 bg-gray-800 p-2">
			<p className="text-lg font-semibold text-white">{props.name || "Name"}</p>
			<p className="text-gray-400">{props.data || "129"}</p>
		</div>
	);
}
