import React from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {HomeOutlined,EditOutlined,FolderOutlined,UserOutlined} from "@ant-design/icons";
export default class Classify extends React.Component{
	constructor(props) {
        super(props)
        this.state = {
            current: "首页"
        }
    };
 	handleClick = e => {
    	this.setState({
      		current: e.key,
    	});
    };
	render(){
		return(
			<Menu
				onClick={this.handleClick}
	        	selectedKeys={[this.state.current]}
	       	 	mode="horizontal"
	        	className="menu"
			>
				<Menu.Item key="首页">
					<Link to="/">
						<HomeOutlined />
						首页
					</Link>
				</Menu.Item>
				<Menu.Item key="归档">
					<Link to="/file">
						<EditOutlined />
						归档
					</Link>
				</Menu.Item>
				<Menu.Item key="分类">
					<Link to="/classify">
						<FolderOutlined />
						分类
					</Link>
				</Menu.Item>
				<Menu.Item key="关于">
					<Link to="/about">
						<UserOutlined />
						关于
					</Link>
				</Menu.Item>
			</Menu>
		)
	}
}