import { useEffect, useState } from "react";

export let useFetch = (url) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((rawdata) => rawdata.json())
			.then((jsondata) => setData(jsondata));
	}, []);
	return data;
};
