import React from "react";
import { Link, Outlet } from "react-router-dom";

const DesignPatterns = () => {
	return (
		<div>
			<nav
				className="navbar navbar-expand-xl"
				style={{ backgroundColor: "#E4B1F0" }}
			>
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
									to={"renderinglist"}
								>
									Efficiently Rendering List
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
									to={"liftingstate"}
								>
									Lifting State Up
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/designpatterns/usingcustomhook"}
								>
									UsingCustomHook
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/designpatterns/hoc"}
								>
									HOC
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/designpatterns/hoc2"}
								>
									HOC2
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/designpatterns/renderprops"}
								>
									Render Props
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/designpatterns/compoundpattern"}
								>
									Compound Pattern
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/designpatterns/pagination"}
								>
									Pagination
								</Link>
							</li>
              <li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/designpatterns/debounce"}
								>
									Debounce
								</Link>
							</li>
              <li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={"/designpatterns/debouncecustom"}
								>
									DebounceCustom
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

export default DesignPatterns;
