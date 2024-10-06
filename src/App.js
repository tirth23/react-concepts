// Core imports
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Stylesheet
import "./App.css";

// Component imports
import Home from "./Home.js";
import Lifecycledemo from "./Components/Lifecycledemo";
import Topnavbar from "./Components/Topnavbar";

// Design pattern components
import DesignPatterns from "./Components/DesignPatterns/DesignPatterns.jsx";
import Lazy from "./Components/DesignPatterns/Lazy.jsx";
import LiftingStateParent from "./Components/DesignPatterns/LiftingStateParent.jsx";
import Debounce from "./Components/DesignPatterns/Debounce.jsx";
import Pagination from "./Components/DesignPatterns/Pagination.jsx";
import UsingCustomHook from "./Components/DesignPatterns/UsingCustomHook.js";
import DebounceCustom from "./Components/DesignPatterns/DebounceCustom.jsx";
import Citylist from "./Components/DesignPatterns/HOCCitylist.jsx";
import Comp1 from "./Components/DesignPatterns/HOC2Comp1.jsx";
import RenderProps from "./Components/DesignPatterns/RenderProps.jsx";
import CompoundPattern from "./Components/DesignPatterns/CompoundPattern.jsx";

// Form components
import Forms from "./Components/Forms/Forms.jsx";
import Uncontrolledform from "./Components/Forms/Uncontrolledform.jsx";
import Controlledform from "./Components/Forms/Controlledform.jsx";

import Login from "./Components/Login";
import AxiosDemo from "./Components/AxiosDemo.js";

import Counter from "./Components/Counter.js";
import Classcomp from "./Components/ClassCounter.jsx";
import Timer from "./Components/Timer/Timer.jsx";
import Productdetails from "./Components/ProductList/Productdetails.jsx";
import Productlist from "./Components/ProductList/Productlist.jsx";
import Errorcomp from "./Components/Errorcomp";

// Hooks components
import Hooks from "./Components/Hooks/Hooks.jsx";
//Dynamic import should be done atlast in the file after all import
const UseEffect = lazy(() => import("./Components/Hooks/UseEffect.jsx"));
const UseContext = lazy(() => import("./Components/Hooks/UseContext.jsx"));
const UseRef = lazy(() => import("./Components/Hooks/UseRef.jsx"));
const UseCallback = lazy(() => import("./Components/Hooks/UseCallback.jsx"));
const UseMemo = lazy(() => import("./Components/Hooks/UseMemo.jsx"));
const UseReducer = lazy(() => import("./Components/Hooks/UseReducer.jsx"));

/* 
  Best Practices:
  1. Core libraries (e.g., React, React Router) are imported first.
  2. Global styles are imported next.
  3. Component imports are grouped by type (e.g., core components, HOCs, design patterns, forms).
  4. Consistent naming conventions are used for components (PascalCase).
  5. Proper organization of imports improves readability and maintainability.
*/

function App() {
	return (
		<div>
			<Topnavbar />
			<Routes>
				{/* Home route */}
				<Route path="/" element={<Home msg="Hello world" country="india" />} />

				{/* Hooks routes */}
				<Route path="/hooks" element={<Hooks />}>
					<Route
						path="/hooks/useeffect"
						element={
							<Suspense fallback={<h2>Loading UseEffect...</h2>}>
								<UseEffect />
							</Suspense>
						}
					/>
					<Route
						path="/hooks/usecontext"
						element={
							<Suspense fallback={<h2>Loading UseContext...</h2>}>
								<UseContext />
							</Suspense>
						}
					/>
					<Route
						path="/hooks/useref"
						element={
							<Suspense fallback={<h2>Loading UseRef...</h2>}>
								<UseRef />
							</Suspense>
						}
					/>
					<Route
						path="/hooks/usecallback"
						element={
							<Suspense fallback={<h2>Loading UseCallback...</h2>}>
								<UseCallback />
							</Suspense>
						}
					/>
					<Route
						path="/hooks/usememo"
						element={
							<Suspense fallback={<h2>Loading UseMemo...</h2>}>
								<UseMemo />
							</Suspense>
						}
					/>
					<Route
						path="/hooks/usereducer"
						element={
							<Suspense fallback={<h2>Loading UseReducer...</h2>}>
								<UseReducer />
							</Suspense>
						}
					/>
				</Route>

				{/* Design Patterns routes */}
				<Route path="/designpatterns" element={<DesignPatterns />}>
					<Route path="/designpatterns/lazy" element={<Lazy />} />
					<Route
						path="/designpatterns/liftingstate"
						element={<LiftingStateParent />}
					/>
					<Route path="/designpatterns/hoc" element={<Citylist />} />
					<Route
						path="/designpatterns/hoc2"
						element={<Comp1 randomNumber={Math.random()} />}
					/>
					<Route path="/designpatterns/renderprops" element={<RenderProps />} />
					<Route
						path="/designpatterns/compoundpattern"
						element={<CompoundPattern />}
					/>
					<Route path="/designpatterns/pagination" element={<Pagination />} />
					<Route
						path="/designpatterns/usingcustomhook"
						element={<UsingCustomHook />}
					/>
					<Route path="/designpatterns/debounce" element={<Debounce />} />
					<Route
						path="/designpatterns/debouncecustom"
						element={<DebounceCustom />}
					/>
				</Route>

				{/* Forms routes */}
				<Route path="/forms" element={<Forms />}>
					<Route
						path="/forms/uncontrolledform"
						element={<Uncontrolledform />}
					/>
					<Route path="/forms/controlledform" element={<Controlledform />} />
				</Route>

				{/* Other routes */}
				<Route path="/lifecycledemo" element={<Lifecycledemo info="Hi" />} />
				<Route path="/axiosdemo" element={<AxiosDemo />} />
				<Route path="/redux" element={<Login />} />

				<Route
					path="/counter"
					element={
						<p>
							rating:
							<Counter max="5" min="0" />
						</p>
					}
				/>
				<Route path="/classcounter" element={<Classcomp msg="Hello" />} />
				<Route path="/timer" element={<Timer />} />
				<Route path="/productlist" element={<Productlist />} />
				<Route path="/productdetail/:pid/:pname" element={<Productdetails />} />
				<Route path="*" element={<Errorcomp />} />
			</Routes>
		</div>
	);
}

export default App;
