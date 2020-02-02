import React, {Component} from 'react';

import Navbar from './component/navbar';
import Banner from './component/banner';
import Partner from './component/partner';
import Video from './component/video';
import Section from './component/section';
import Footer from './component/footer';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component{
	render(){
		return(
			<div className="App">
				<Navbar />
				<Banner />
				<Partner />
				<Video />
				<Section />
				<Footer />
			</div>
		)
	}
}

export default App;