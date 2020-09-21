import React, { useState } from "react"
import PropTypes from "prop-types"
import "./layout.css"
import { Link } from "gatsby"

import { Layout, Menu, Row, Col } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ProfileOutlined,
  BarChartOutlined,

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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            <Menu.Item key="1" icon={<ProfileOutlined /> }>
              <Link to="/">About Me</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BarChartOutlined />}>
              <Link to="/work/">Work</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header title='Vatsala Srivastava' className="site-layout-background" style={{ padding: 0 }}>
            <Row align="middle" justify="space-between">
              <Col span={6}>
                {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: toggle,
                })} */}
                <div >
                  {collapsed ? <MenuUnfoldOutlined className="trigger" onClick={toggle}/> : 
                    <MenuFoldOutlined className="trigger" onClick={toggle}/>
                  }
                  {/* {showBox && (<div></div>)} */}
                </div>
              </Col>
              <Col span={18} push={14}>
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['0']}>
                  <Menu.Item key="1">
                    <a href="https://twitter.com/vatsalasrivast2" target="_blank" rel="noreferrer">
                      <TwitterOutlined  />
                    </a>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <a href="https://github.com/vatsala21" target="_blank" rel="noreferrer">
                      <GithubOutlined />
                    </a>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <a href="https://www.behance.net/vatsalasrivastava" target="_blank" rel="noreferrer">
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
              backgroundColor: '#f7f7f7'
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
