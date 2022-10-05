import React, { memo } from "react";

function DashboardPanel(props) {
	return (
		<div
			className={`w-full overflow-hidden border-2 border-gray-800 bg-gray-300 p-1 md:p-4 ${
				props.additionalClasses || ""
			}`}
		>
			{props.children}
		</div>
	);
}

export default memo(DashboardPanel);
