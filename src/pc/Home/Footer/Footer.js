import React from "react";
import Left from "../../Common/Footer-Left/left.js";
import "../../Common/Footer-Left/footer.css";
import TitleList from "./TitleList/titleList.js";
export default class Home extends React.Component{
	render(){
		return(
			<div className="footer">
				<Left />
				<TitleList />
			</div>
		)
	}
}