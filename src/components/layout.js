/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import "./layout.css"

import { Layout, Menu, Row, Col } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  FacebookFilled,

  TwitterOutlined,
  GithubOutlined,
  BehanceOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const SiteLayout = ({ children }) => {

  const [collapsed, setCollapsed]= useState(true);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout>
        <Sider theme='dark' trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<FacebookFilled />}>
              nav 4
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header title='Vatsala Srivastava' className="site-layout-background" style={{ padding: 0 }}>
            <Row align="middle" justify="space-between">
              <Col span={6}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: toggle,
                })}
              </Col>
              <Col span={18} push={14}>
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
                  <Menu.Item key="1">
                    <TwitterOutlined  />
                  </Menu.Item>
                  <Menu.Item key="2">
                    <a href="https://github.com/vatsala21" target="_blank">
                      <GithubOutlined />
                    </a>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <a href="https://www.behance.net/vatsalasrivastava" target="_blank">
                      <BehanceOutlined />
                    </a>
                  </Menu.Item>
                </Menu>    
              </Col>
            </Row>
          
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteLayout
