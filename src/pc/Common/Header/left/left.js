import React from "react";
import {title} from "../../../config.js";
import "./left.css";
import {SearchOutlined} from "@ant-design/icons";
export default class Left extends React.Component{
	render(){
		return (
			<div className="head-left">
				<div className="title">
					<img src={process.env.PUBLIC_URL + 'icon.png'} alt="我的图标" />
					<span>{title}</span>
				</div>
				<div className="search">
					<SearchOutlined className="search-icon" />
					<input type="text" placeholder="搜索文章" />
				</div>
			</div>
		)
	}
}