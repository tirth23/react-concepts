import React, { createContext, useContext } from "react";

const TabContext = createContext();

const Tab = ({ currentTab, onChange, children }) => {
	return (
		<TabContext.Provider value={{ currentTab, onChange }}>
			{children}
		</TabContext.Provider>
	);
};

Tab.HeadsContainer = ({ children }) => {
	return (
		<div style={{ display: "flex", gap: "16px", cursor: "pointer" }}>
			{children}
		</div>
	);
};

const TabItem = ({ label, index }) => {
	const { currentTab, onChange } = useContext(TabContext);
	const handleClick = () => {
		onChange(index);
	};
	return (
		<div
			onClick={handleClick}
			className={`item ${currentTab === index ? "active" : ""}`}
		>
			{label}
		</div>
	);
};
Tab.Item = TabItem;

const TabContentItem = ({ index, children }) => {
	const { currentTab } = useContext(TabContext);
	return currentTab === index ? <div>{children}</div> : null;
};
Tab.ContentItem = TabContentItem;

Tab.ContentContainer = ({ children }) => {
	return <div>{children}</div>;
};

export default Tab;
