import React, { memo } from "react";

function DashboardPanel(props) {
	return <div className="p-4">{props.children}</div>;
}

export default memo(DashboardPanel);
