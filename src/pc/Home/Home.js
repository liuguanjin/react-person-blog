import React from "react";
import Header from "../Common/Header/Header.js";
import Footer from "./footer/index.js";
export default class Home extends React.Component{
	render(){
		var style = {backgroundColor:"#eee"};
		return(
			<div className="home" style={style}>
				<Header />
				<Footer />
			</div>
		)
	}
}