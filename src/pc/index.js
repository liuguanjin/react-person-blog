import React from 'react';
import  {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Home from "./Home/Home.js";
import Classify from "./Classify/Classify.js";
import About from "./About/About.js";
import File from "./File/File.js";
import Detail from "./Detail/Detail.js";
import Header from "./Common/Header/Header.js";
import FooterLeft from "./Common/Footer-Left/left.js";
export default class PcIndex extends React.Component{
	render(){
		const style = {backgroundColor:"#eee"};
		const footerStyle = {display:"flex",flexDirection:"row",alignItems:"center"}
		return(
			<div className="pc" style={style}>
				<Header />
				<div className="footer" style={footerStyle}>
					<FooterLeft />
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/classify">
							<Classify />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/file">
							<File />
						</Route>
						<Route path="/detail/:id">
							<Detail />
						</Route>
						<Redirect to="/" />
					</Switch>
				</div>
			</div>
		)
	}
}