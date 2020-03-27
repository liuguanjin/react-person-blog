import React from "react";
import "./right.css";
import Classify from "./menu/menu.js";
import Btn from "./btn/btn.js";
export default class Right extends React.Component{
	render(){
		return (
			<div className="head-right">
				<Classify />
				<Btn />
			</div>
		)
	}
}