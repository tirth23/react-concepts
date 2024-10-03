import "./App.css";
import Home from "./Home.js";
import Counter from "./Components/Counter.js";
import Productlist from "./Components/Productlist.jsx";
import Classcomp from "./Components/Classcomp.jsx";
import Lifecycledemo from "./Components/Lifecycledemo";
import UseMemo from "./Components/UseMemo.jsx";
import UsingCustomHook from "./Components/UsingCustomHook.js";
import Debounce from "./Components/Debouncing";
import Context from "./Components/Context";
import Ref from "./Components/Ref";

//if exported as default, no {} required and can be imported by newmsgname directly inplace of Citylist as any alias name
import Citylist from "./Components/Citylist.jsx";

//if exported without default need {} for import and can be imported by {msg as newmsgname} as any alias name
import { Routes, Route, Outlet } from "react-router-dom";
import Errorcomp from "./Components/Errorcomp";
import Topnavbar from "./Components/Topnavbar";
import Productdetails from "./Components/Productdetails";
import Uncontrolledform from "./Components/Uncontrolledform.jsx";
import Controlledform from "./Components/Controlledform.jsx";
import Login from "./Components/Login";
import { Axios } from "axios";
import AxiosDemo from "./Components/AxiosDemo.js";
import React from "react";
import Effect from "./Components/Effect.jsx";
import UseCallback from "./Components/UseCallback.jsx";
import Lazy from "./Components/Lazy.jsx";
import Comp1 from "./Components/Comp1.jsx";
import RenderProps from "./Components/RenderProps.jsx";
import CompoundPattern from "./Components/CompoundPattern.jsx";

function App() {
	return (
		<div>
			<Topnavbar />
			<Routes>
				<Route
					exact
					path="/"
					element={<Home msg="Hello world" country="india" />}
				></Route>
				<Route exact path="/effect" element={<Effect />}></Route>
				<Route
					exact
					path="/counter"
					element={
						<p>
							rating:
							<Counter max="5" min="0" />
						</p>
					}
				></Route>
				<Route
					exact
					path="/classcounter"
					element={<Classcomp msg="Hello" />}
				></Route>
				<Route
					exact
					path="/lifecycledemo"
					element={<Lifecycledemo info="Hi" />}
				></Route>
				<Route exact path="/productlist" element={<Productlist />}></Route>
				<Route
					exact
					path="/productdetail/:pid/:pname"
					element={<Productdetails />}
				></Route>
				<Route
					exact
					path="/uncontrolledform"
					element={<Uncontrolledform />}
				></Route>
				<Route
					exact
					path="/controlledform"
					element={<Controlledform />}
				></Route>
				<Route exact path="/context" element={<Context />}></Route>
				<Route exact path="/ref" element={<Ref />}></Route>
				<Route exact path="/lazy" element={<Lazy />}></Route>
				<Route exact path="/axiosdemo" element={<AxiosDemo />}></Route>
				<Route exact path="/redux" element={<Login />}></Route>
				<Route exact path="/usecallback" element={<UseCallback />}></Route>
				<Route exact path="/usememo" element={<UseMemo />}></Route>
				<Route
					exact
					path="/usingcustomhook"
					element={<UsingCustomHook />}
				></Route>
				<Route exact path="/hoc" element={<Citylist />}></Route>
				<Route
					exact
					path="/hoc2"
					element={<Comp1 randomNumber={Math.random()} />}
				></Route>
				<Route exact path="/renderprops" element={<RenderProps />}></Route>
				<Route
					exact
					path="/compoundpattern"
					element={<CompoundPattern />}
				></Route>
				<Route exact path="*" element={<Errorcomp />}></Route>
			</Routes>
		</div>
	);
}

export default App;
