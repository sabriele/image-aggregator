import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

import './Search.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageResult from '../ImageResult/ImageResult';

const { Content } = Layout;

export default class Search extends Component {
  render() {
    const { images } = this.props;
    return (
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="paper">
          <SearchBar />
          {images.length > 0 && (
            <div className="paper">
              <Row gutter={40}>
                {images.map((image, i) => (
                  <Col className="gutter-row" xs={24} md={12} lg={6} key={i}>
                    <ImageResult imageId={image.id} />
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </div>
      </Content>
    );
  }
}
