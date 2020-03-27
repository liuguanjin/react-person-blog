import React from "react";
import {Button} from "antd";
export default class Btn extends React.Component{
	render(){
		return (
			<div className="button">
				<Button size="small" type='danger' ghost>注册</Button>
				<Button size="small" type='primary' ghost>登录</Button>
			</div>
		)
	}
}