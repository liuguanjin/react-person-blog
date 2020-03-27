import React from "react";
import Header from "../Common/Header/Header.js";
import Footer from "./Footer/Footer.js";
export default class Home extends React.Component{
	render(){
		return(
			<div className="about">
				<Header />
				<Footer />
			</div>
		)
	}
}