import React from 'react';
import  {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./Home/Home.js";
import Classify from "./Classify/Classify.js";
import About from "./About/About.js";
import File from "./File/File.js";
import Detail from "./Detail/Detail.js";
export default class PcIndex extends React.Component{
	render(){
		return(
			<div className="pc">
				<BrowserRouter>
					<Switch>
						<Route path="/" component={Home} />
						<Route path="/classify" component={Classify} />
						<Route path="/about" component={About} />
						<Route path="/file" component={File} />
						<Route path="/detail/:id" component={Detail} />
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}