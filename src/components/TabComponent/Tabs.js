import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import data from "../../rawData.json";
import TabContentCard from "../TabComponent/TabContentCard";

const Tabs = () => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<div className="Tabs">
			<ul className="nav">
				{data.map((item, index) => {
					return (
						<TabNavItem
							key={item.heading}
							title={item.heading}
							id={index}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
							toolTip={item.data.length > 2 ? item.data.length : false}
						/>
					);
				})}
			</ul>

			<div className="outlet">
				{data.map((e, index) =>
					e.data.map((f) => {
						return (
							<TabContent id={index} key={f.name} activeTab={activeTab}>
								<TabContentCard item={f} />
							</TabContent>
						);
					}),
				)}
			</div>
		</div>
	);
};

export default Tabs;
