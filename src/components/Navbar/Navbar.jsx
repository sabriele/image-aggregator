import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './Navbar.css';

const { Header } = Layout;

export default class Navbar extends Component {
  render() {
    return (
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          background: '#ffffff',
        }}
      >
        <div style={{ width: '160px', float: 'left' }}>
          <img className="logo" src="/logo.png" alt="logo" />
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Search</Menu.Item>
          <Menu.Item key="2">Favourites</Menu.Item>
        </Menu>
      </Header>
    );
  }
}
