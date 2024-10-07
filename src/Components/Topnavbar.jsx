import React from "react";
import { Link } from "react-router-dom";

function Topnavbar(props) {
	let styleobj = { backgroundColor: "#66ddbb" };

/* 
Anchor tags usage will require to manually update the url and browser history and prevent the page reload (using event.preventDefault)

Link will render to <a> in DOM
Link is used instead of <a> bcoz Clicking on <a> tags causes browser to reload the entire page. This resets the 
application state and can disrupt user experience 

Link uses client side routing to update the URL without reloading the entire page. This keeps the application state
intact and help transition from one view to another seamlessly

Link only helps update the parts that are needed to change, hence speeding up the navigation

Link Automatically handles navigation using React routers navigation management system. Additional benefits like
dynamic route matching and nested routes are available. 

It integrates seamlessly with the React Router setup, ensuring that route changes are in sync with the
application's state and the URL
*/
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
									to={"/lifecycledemo"}
								>
									LifeCycle
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"hooks"}
								>
									Hooks
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"designpatterns"}
								>
									Design Patterns
								</Link>
							</li>
              <li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/forms"}
								>
									Forms
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
									to={"timer"}
								>
									Timer
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
									to={"/productdetail/2/laptop"}
								>
									Productdetails
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
