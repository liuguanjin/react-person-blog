import React from "react";
import "./Home.css";
import {titlelist} from "../config.js";
const content =  titlelist.map((item)=>
	<div key={item.id} className="titlelist-item">
		<div className="item-title">
			<div>
				<span>{item.title}</span>
				<span className="date">{item.date}</span>
			</div>
		</div>
		<p className="summary">{item.summary}</p>
		<p className="tags">
			{item.tags.split(" ").map((item1,index1)=>
				<span key={index1}>{item1}</span>
			)}
		</p>
	</div>
)
const listItems = titlelist.map((item)=>
	<li key={item.id}>
		{item.title}
	</li>
)
export default class TitleList extends React.Component{
	render(){
		return(
			<div className="home">
				<div className="content">
					{content}
				</div>
				<div className="title">
					<span>文章列表</span>
					<ul className="listItem">
						{listItems}
					</ul>
				</div>
			</div>
		)
	}
}