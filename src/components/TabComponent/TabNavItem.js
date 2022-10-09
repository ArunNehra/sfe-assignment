import React from "react";
const TabNavItem = ({ id, title, toolTip, activeTab, setActiveTab }) => {
	const handleClick = () => {
		setActiveTab(id);
	};

	return (
		<li onClick={handleClick} className={activeTab === id ? "active" : ""}>
			{title}
			{toolTip && activeTab === id ? (
				<span className="tooltip">{toolTip}</span>
			) : null}
		</li>
	);
};
export default TabNavItem;
