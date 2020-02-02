import React from 'react';
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

function Banner(props) {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-md-5 col-sm-5 col-xs-12">
						<div className="widget">
							<div className="title">
								<Link to="">
									<img alt="" src={require ('../img/Logo Baba Studio_Putih (169x32).png')} />
								</Link>
							</div>
						</div>
					</div>
					<div className="col-md-2 col-sm-2 col-xs-12">
						<div className="widget">
							<div className="title">
								<h3>Tentang</h3>
							</div>
						</div>
						<div className="description">
							<ul>
								<li>
									<Link to="#">Kupon</Link>
								</li>
								<li>
									<Link to="#">Kursus</Link>
								</li>
								<li>
									<Link to="#">Login</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-2 col-sm-2 col-xs-12">
						<div className="widget">
							<div className="title">
								<h3>Customer Service</h3>
							</div>
						</div>
						<div className="description">
							<ul>
								<li>
									<Link to="#">FAQ</Link>
								</li>
								<li>
									<Link to="#">Kontak Kami</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-3 col-sm-3 col-xs-12">
						<div className="widget">
							<div className="title">
								<h3>Subscribe</h3>
							</div>
						</div>
						<div className="description">
							<p>Ikuti berita kami</p>
							<div>
							<form className="form-inline">
								<div className="form-group">
									<input type="" name="" placeholder="Enter your email" className="form-control" />
								</div>
								<button className="btn btn-default">
									<Icon>send</Icon>
								</button>
							</form>
							</div>
							<p>Terkoneksi dengan kami</p>
							<ul className="media">
								<li>
									<Link to="#"><Icon>send</Icon></Link>
								</li>
								<li>
									<Link to="#"><Icon>send</Icon></Link>
								</li>
								<li>
									<Link to="#"><Icon>send</Icon></Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Banner;