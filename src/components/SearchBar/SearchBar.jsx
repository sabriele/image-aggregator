import React, { Component } from 'react';
import { Input } from 'antd';

const Search = Input.Search;

export default class SearchBar extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Search
          placeholder="Start searching for Images!"
          size="large"
          allowClear
          onSearch={value => console.log(value)}
          style={{ width: '50vw' }}
        />
      </div>
    );
  }
}
