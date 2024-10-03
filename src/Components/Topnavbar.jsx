import React from "react";
import { Link } from "react-router-dom";

function Topnavbar(props) {
	let styleobj = { backgroundColor: "darkcyan" };

	return (
		<div>
			<nav className="navbar navbar-expand-xl" style={styleobj}>
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						React Demo
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to={"/"}>
									Home
								</Link>
							</li>
              <li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"effect"}
								>
									useEffect
								</Link>
							</li>
              <li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"context"}
								>
									useContext
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"ref"}
								>
									useRef
								</Link>
							</li>
              <li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"usecallback"}
								>
									useCallback
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"usememo"}
								>
									useMemo
								</Link>
							</li>
              <li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"lazy"}
								>
									Lazy Loading
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/productlist"}
								>
									ProductList
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/counter"}
								>
									Counter
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/classcounter"}
								>
									ClassCounter
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/lifecycledemo"}
								>
									LifeCycleDemo
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/hoc"}
								>
									HOC
								</Link>
							</li>
              <li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/hoc2"}
								>
									HOC2
								</Link>
							</li>
              <li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/renderprops"}
								>
									Render Props
								</Link>
							</li>
              <li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/compoundpattern"}
								>
									Compound Pattern
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/uncontrolledform"}
								>
									Uncontrolled form
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/controlledform"}
								>
									Controlled form
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/usingcustomhook"}
								>
									UsingCustomHook
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/axiosdemo"}
								>
									Axios
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/redux"}
								>
									reduxdemo
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Topnavbar;
