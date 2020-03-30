import React from "react";
import avatar from "../../assets/images/touxiang.png";
import {myName,blogDescribe,blogGithub,title} from "../config.js";
import {QqOutlined} from "@ant-design/icons"
import "./About.css";
export default class Home extends React.Component{
	render(){
		return(
			<div className="about">
					<div className="img">
						<img src={avatar} alt="我的头像" />
						<span>{myName}</span>
					</div>
					<div className="blog-describe">
						<p>{blogDescribe}</p>
						<p>源码地址为:<a href={blogGithub}>{title}</a>,仅供参考,不做任何商业用途</p>
					</div>
					<div className="my-message">
						<ul>
							<li>姓名:刘观金</li>
							<li>学历:本科 院校:辽宁工程技术大学 专业:自动化</li>
							<li>联系方式:<QqOutlined /> 1060086991</li>
							<li>坐标:厦门市</li>
							<li>
								技能
								<ul>
									<li>HTML、CSS、javascript、jQuery熟练使用</li>
									<li>vue、react熟练使用</li>
									<li>熟悉es6语法</li>
									<li>熟悉webpack打包工具</li>
									<li>熟悉nodejs、mysql、express等后端工具</li>
								</ul>
							</li>
							<li>
								其他
								<ul>
									<li>熟悉git</li>
									<li>良好的代码习惯</li>
									<li>热爱学习</li>
								</ul>
							</li>
							<li>
								个人
								<ul>
									<li>兴趣:偶尔玩游戏,唱唱歌</li>
									<li>性格:儒雅随和,偏内向</li>
								</ul>
							</li>
						</ul>
					</div>
			</div>
		)
	}
}