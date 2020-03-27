import React from "react";
import Left from "./left/left.js";
import Right from "./right/right.js";
import "./Header.css";
export default class Top extends React.Component{
	render(){
		return (
			<div className="top">
				<Left />
				<Right />
			</div>
		)
	}
}
