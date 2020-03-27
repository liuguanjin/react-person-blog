import React from "react";
import {Menu} from "antd";
import {HomeOutlined,EditOutlined,FolderOutlined,UserOutlined} from "@ant-design/icons";
export default class Classify extends React.Component{
	constructor(props) {
        super(props)
        this.state = {
            current: "首页"
        }
    };
 	handleClick = e => {
    	console.log('click ', e);
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
					<HomeOutlined />
					首页
				</Menu.Item>
				<Menu.Item key="归档">
					<EditOutlined />
					归档
				</Menu.Item>
				<Menu.Item key="分类">
					<FolderOutlined />
					分类
				</Menu.Item>
				<Menu.Item key="关于">
					<UserOutlined />
					关于
				</Menu.Item>
			</Menu>
		)
	}
}