import React from "react";
import { Link, Outlet } from "react-router-dom";

const Forms = () => {
	return (
		<div>
			<nav
				className="navbar navbar-expand-xl"
				style={{ backgroundColor: "#eed2ff" }}
			>
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Forms
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
									to={"/forms/uncontrolledform"}
								>
									Uncontrolled form
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/forms/controlledform"}
								>
									Controlled form
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

export default Forms;
