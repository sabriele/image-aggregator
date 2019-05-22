import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

import './Search.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageResult from '../ImageResult/ImageResult';

const { Content } = Layout;

export default class Search extends Component {
  render() {
    return (
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="paper">
          <SearchBar />
          <div className="paper">
            <Row gutter={40} style={{ marginBottom: '48px' }}>
              <Col className="gutter-row" span={6}>
                <ImageResult />
              </Col>
              <Col className="gutter-row" span={6}>
                <ImageResult />
              </Col>
              <Col className="gutter-row" span={6}>
                <ImageResult />
              </Col>
              <Col className="gutter-row" span={6}>
                <ImageResult />
              </Col>
            </Row>
            <Row gutter={40} style={{ marginBottom: '40px' }}>
              <Col className="gutter-row" span={6}>
                <ImageResult />
              </Col>
              <Col className="gutter-row" span={6}>
                <ImageResult />
              </Col>
              <Col className="gutter-row" span={6}>
                <ImageResult />
              </Col>
              <Col className="gutter-row" span={6}>
                <ImageResult />
              </Col>
            </Row>
          </div>
        </div>
      </Content>
    );
  }
}
