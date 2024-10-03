import { Children, createContext } from "react";

const TabContext = createContext();

export default function Tab({ currentTab, onChange, children }) {
	return <TabContext.Provider value={{}}>{children}</TabContext.Provider>;
}

Tab.HeadsContainer = ({ children }) => {
	return <div>{children}</div>;
};

Tab.Item = ({ label, index, children }) => {
	return <div>{label}</div>;
};

Tab.ContentContainer = ({ children }) => {
	return <div>{children}</div>;
};

Tab.ContentItem = ({index, children }) => {
	return <div>{children}</div>;
};