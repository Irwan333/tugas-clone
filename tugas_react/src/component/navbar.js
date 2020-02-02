import React from 'react';
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

function Navbar(props) {
	return (
		<header id="header" className="header fixed">
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<Link className="navbar-brand" to="">
				<img alt="" className="img-fluid" src="https://academy.babastudio.com/assets/img/Logo Baba Studio_Putih (169x32).png" />
				</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="#"><div className="apel"><Icon className="bawah">view_comfy</Icon>Categories <span className="sr-only">(current)</span></div></Link>
						</li>
					</ul>

					<ul className="nav justify-content-between panjang">
						<li className="nav-item">
							<form className="form-inline ">
								<input className="form-control mr-sm-2" id="pencarian" type="search" placeholder="Search" aria-label="Search"/>
								<Icon className="icon-search">search</Icon>
							</form>
						</li>
					</ul>

					<ul className="nav ml-auto">
						<Link className="nav-link text-white" to="#"><div className="kentang apel">Techfor Community</div></Link>
						<Link className="nav-link text-white" to="#"><div className="kentang pir"><Icon>shopping_cart</Icon></div></Link>
						<Link className="nav-link text-white" to="#"><div className="kentang jeruk">Login</div></Link>
						<Link className="nav-link text-white" to="#"><button type="button" className="btn btn-outline-primary persik">Sign Up</button></Link>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;