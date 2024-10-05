// Core imports
import React from "react";
import { Routes, Route } from "react-router-dom";

// Stylesheet
import "./App.css";

// Component imports
import Home from "./Home.js";
import Lifecycledemo from "./Components/Lifecycledemo";
import Topnavbar from "./Components/Topnavbar";

// Hooks components
import Hooks from "./Components/Hooks/Hooks.jsx";
import UseEffect from "./Components/Hooks/UseEffect.jsx";
import UseContext from "./Components/Hooks/UseContext.jsx";
import UseRef from "./Components/Hooks/UseRef.jsx";
import UseCallback from "./Components/Hooks/UseCallback.jsx";
import UseMemo from "./Components/Hooks/UseMemo.jsx";
import UseReducer from "./Components/Hooks/UseReducer.jsx";

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
					<Route path="/hooks/useeffect" element={<UseEffect />} />
					<Route path="/hooks/usecontext" element={<UseContext />} />
					<Route path="/hooks/useref" element={<UseRef />} />
					<Route path="/hooks/usecallback" element={<UseCallback />} />
					<Route path="/hooks/usememo" element={<UseMemo />} />
					<Route path="/hooks/usereducer" element={<UseReducer />} />
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
