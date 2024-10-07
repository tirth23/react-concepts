import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

/* 
In React, hooks are special functions that allow you to add extra capabilities to your functional components. They enable you to
manage state, perform side effects, and reuse logic in a more organized and efficient way.

hooks name should starts with "use"
Hooks should be declared in the top order of the comp
Hooks should be executed in the same for each rendering
Hooks can be used only within function comp.
Hooks can't be used in class comp
Hooks can't be used in if, for
Do not call Hooks in event handlers
Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect 
*/

const Hooks = () => {
	return (
		<div>
			<nav
				className="navbar navbar-expand-xl"
				style={{ backgroundColor: "#eeeeee" }}
			>
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Hooks
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
									to={"usestate"}
								>
									useState
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"useeffect"}
								>
									useEffect
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"usecontext"}
								>
									useContext
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"useref"}
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
									to={"usereducer"}
								>
									useReducer
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<Outlet />
		</div>
	);
};

export default Hooks;
