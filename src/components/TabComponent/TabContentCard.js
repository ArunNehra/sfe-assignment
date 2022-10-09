import React from "react";
const TabContentCard = ({ item }) => {
	return (
		<div className="TabContentCard">
			<div className="cardThumbnail">
				<span className={item.img} />
				<a href={`mailto:${item.email}`}>
					<span>&#9993;</span>
				</a>
			</div>
			<div className="cardContent">
				<div>
					<p className="name">{item.name}</p>
					<p className="title">{item.title}</p>
				</div>
				<p className="location">{item.location}</p>
			</div>
		</div>
	);
};

export default TabContentCard;
