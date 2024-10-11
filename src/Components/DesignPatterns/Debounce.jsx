import React, { useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";

/* 
When you import a CSS file like ./cssfile.css into a React component (a .jsx or .js file), React doesn't directly 
interpret or process the CSS itself.  the bundler (such as Webpack) recognizes this as a module import. It processes the 
CSS file based on the configuration you've set up, usually with a CSS loader. The loader takes the contents of the CSS file 
and injects them into the final bundle as part of the build process. The bundler typically inlines the CSS into the <style> 
tags of the <head> section of the final HTML page, so when your React component renders, the styles are already
available in the browser.

Once the CSS is processed and injected into the HTML <style> tag, it behaves like standard CSS. 
The browser applies the styles to the elements based on their selectors (classes, IDs, etc.).

The import './styles.css'; statement is transformed by the bundler. Using a CSS loader plugin, Webpack will:
Parse the CSS file.
Create a JavaScript module from the CSS content.
Insert the styles into the document's <head> section when the application is loaded.
The browser applies the styles to any matching elements, like the div with the class header

Global styles: When you import a CSS file normally (as shown above), the styles in that file are applied globally 
across your React app (depending on the specificity of the selectors).

CSS Modules: If you want CSS to be scoped only to a particular component (i.e., avoiding global class name collisions), 
you can use CSS Modules, which locally scope class names. the class names are scoped to the component, and React appends a unique
identifier to them (e.g., .header_asd123), preventing them from interfering with other styles in the app.
*/

import styles from "../../app.module.css";

const Debounce = () => {
	const [inputData, setInputData] = useState("");
	const [data, setData] = useState();
	const debouncedFetchData = useMemo(
		() =>
			debounce(async (searchString) => {
				const response = await fetch(
					`https://swapi.dev/api/people/?search=${searchString}`
				);
				const data = await response.json();
				console.log(data);
				setData(data?.results);
			}, 300),
		[]
	);
	const handleInputChange = (e) => {
		const value = e?.target?.value;
		setInputData(value);
		debouncedFetchData(value);
	};

  // cleanup of debouncedFetchData
	useEffect(() => {
		return () => {
			debouncedFetchData?.cancel();
		};
	}, []);

	return (
		<>
			<h2>Welcome to Star Wars</h2>
			<input type="text" value={inputData} onChange={handleInputChange} className={styles.inputElement} />
			<br />
			{data && data?.length ? (
				<ul>
					{data.map((item) => (
						<li key={item?.created}>{item?.name}</li>
					))}
				</ul>
			) : (
				<span>Loading</span>
			)}
		</>
	);
};

export default Debounce;
