import React from "react";
import "../../Common/Footer-Left/footer.css";
import FooterLeft from "../../Common/Footer-Left/left.js";
export default class Footer extends React.Component{
	render(){
		return(
			div className="footer">
				<FooterLeft />
			</div>
		)
	}
}