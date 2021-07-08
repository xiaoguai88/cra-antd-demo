import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Avatar, Image } from "antd";
import { withRouter } from "react-router-dom";
import { adminRoutes } from "../../../routes";
import Logo from "./icon.png";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "./index.less";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Frame extends Component {
  handleMenuClick = ({ key }) => this.props.history.push(key);
  render() {
    return (
      <Layout>
        <Header className="header header-side">
          <div className="logo">
            <img src={Logo} alt="智中台logo" />
          </div>
          <div className="header-side-menu">
            <div className="header-side-menu-avatar">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
            <div className="header-side-menu-options">
              <span>会员中心</span>
              <span>收藏</span>
              <span>动态</span>
              <span>消息</span>
            </div>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["/admin/home"]}
              defaultOpenKeys={["/admin/home"]}
              style={{ height: "100%", borderRight: 0 }}
              onClick={this.handleMenuClick}
            >
              {adminRoutes.map((route) => {
                return (
                  <Menu.Item key={route.pathname}>
                    {route.icon} {route.text}
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(Frame);
