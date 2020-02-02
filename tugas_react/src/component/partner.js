import React from 'react';

function Partner(props) {
	return (
		<div className="partner-item">
			<div className="container text-center">
			<h6>Pernah Di Liput Oleh:</h6>
				<ul className="partner_list">
					<li>
						<img className="img-fluid kuda" src={require ('../img/metro.png')} height="83" width="137" alt=""/>
					</li>
					<li>
						<img className="img-fluid kuda" src={require ('../img/kompas.png')} height="83" width="137" alt=""/>
					</li>
					<li>
						<img className="img-fluid kuda" src={require ('../img/jktpost.png')} height="83" width="137" alt=""/>
					</li>
					<li>
						<img className="img-fluid kuda" src={require ('../img/detik.png')} height="83" width="137" alt=""/>
					</li>
					<li>
						<img className="img-fluid kuda" src={require ('../img/yahoo.png')} height="83" width="137" alt=""/>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Partner;