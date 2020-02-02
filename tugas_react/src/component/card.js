import React from 'react';

const Cards = (props) => {
	return (
	<div className="card">
			<img alt="" className="card-img-top" src={props.url}/>
			<div className="card-block">
				<p className="judul">{props.title}</p>
				<p className="waktu">{props.durasi}</p>
			</div>
			<div class="card-footer">
				<div className="row">
					<div className="col-6">
						<div className="pull-left"><del>{props.diskon}</del></div>
					</div>
					<div className="col-6">
						<div className="pull-right harga"><strong>Rp. {props.harga}</strong></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cards;