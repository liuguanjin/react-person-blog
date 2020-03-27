import React from "react";
import {myDescribe,myName,titlelist} from "../../config.js";
import {GithubOutlined} from "@ant-design/icons";
import "./left.css";
const avatar = require("../../../assets/images/touxiang.png");
const tags = titlelist.map((item)=>
	<li key={item.id}>
		{item.tags}
	</li>
)
const listItems = titlelist.map((item)=>
	<li key={item.id}>
		{item.title}
	</li>
)
export default class FooterLeft extends React.Component{
	render(){
		return (
			<div className="footer-left">
				<div className="left-top">
					<img src={avatar} alt="我的头像" />
					<span>{myName}</span>
					<span>{myDescribe}</span>
					<div>
						<GithubOutlined />
						<a href="https://github.com/liuguanjin">github</a>
					</div>
				</div>
				<div className="left-bottom">
					<div>
						<span className="hotarticle">热门文章</span>
						<ul>
							{listItems}
						</ul>
					</div>
					<div>
						<span>标签</span>
						<ul className="tags">
							{tags}
						</ul>
					</div>
				</div>
			</div>
		)
	}
} 