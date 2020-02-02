import React from 'react';

function Video(props) {
	return (
		<div className="video-section">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-sm-6 col-xs-12">
						<div className="video" id="portal">
							<iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/k8XN5iCJFhI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
					</div>
					<div className="col-md-6 col-sm-6 col-xs-12">
						<div className="video_description pt-5">
							<div className="pt-4">
								<h2>Liputan Babastudio E-Learning di kompas TV bersama alumni</h2>
								<h5 className="text-secondary">Kompas TV melipus Babastudio E-Learning karena, memberikan kursus pada lebih 500 orang setiap harinya.</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Video;