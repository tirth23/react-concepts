import React, { useState } from "react";
import Tab from "./CompoundPatternTab";

const CompoundPattern = () => {
	const [currentTabIndex, setCurrentTabIndex] = useState(1);

	const handleChange = (newIndex) => {
		setCurrentTabIndex(newIndex);
	};

	return (
		<div>
			<Tab currentTab={currentTabIndex} onChange={handleChange}>
				<Tab.HeadsContainer>
					<Tab.Item label="Tab 1" index={1} />
					<Tab.Item label="Tab 2" index={2} />
					<Tab.Item label="Tab 3" index={3} />
				</Tab.HeadsContainer>
				<Tab.ContentContainer>
					<Tab.ContentItem index={1}>
						<h1>I am content 1</h1>
					</Tab.ContentItem>
					<Tab.ContentItem index={2}>
						<h1>I am content 2</h1>
					</Tab.ContentItem>
					<Tab.ContentItem index={3}>
						<h1>I am content 3</h1>
					</Tab.ContentItem>
				</Tab.ContentContainer>
			</Tab>
		</div>
	);
};

export default CompoundPattern;
