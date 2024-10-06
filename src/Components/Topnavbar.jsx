import React from "react";
import { Link } from "react-router-dom";

function Topnavbar(props) {
	let styleobj = { backgroundColor: "#66ddbb" };

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
