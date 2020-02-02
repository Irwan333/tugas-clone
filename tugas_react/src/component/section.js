import React, {Component} from 'react';
import Cards from './card';
import axios from 'axios';

class Navbar extends Component{
	constructor(props) {
		super(props);
		this.state = {
			post : []
		}
		console.log('apel');

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount(){
		let ayam = this;
		console.log('ayam');

		axios.get('http://localhost:4000/api/kursus/')
		.then(function (response) {
			// handle success
			console.log(response);
			ayam.setState({
				post : response.data.response
			})
		})
		.catch(function (error) {
			// handle error
			console.log('persik');
			console.log(error);
		})
		.finally(function () {
			// always executed
		});
	}

	render(){
		return(
			<div className="slider-section">
				<div className="container">
					<div className="content">
						<div className="title">
							<div className="clearfix">
								<h4>Kursus</h4>
							</div>
						</div>
						<div className="item">
							<div className="row">
								{
									this.state.post.map(
										course => {
										return <div key={course._id} className="col-md-3">
										<Cards title = {course.title} durasi = {course.durasi} harga = {course.harga_real} diskon = {course.harga_diskon} gambar = {course.image} url = {course.url}/>
										</div>
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Navbar;