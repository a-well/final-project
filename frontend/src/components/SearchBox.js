import React from 'react';

import {
  Input, Radio, Form, Row, Col,
} from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const { Search } = Input

function SearchBox() {
  return (
    <Form>
      <Form.Item name="query">
        <Search
          prefix={<SearchOutlined />}
          placeholder='Enter Pokemon name, or keywords eg. "event" or "shiny"'
          allowClear
          enterButton="Search"
          size="medium"
        />
      </Form.Item>
      <Form.Item name="type" label="Listing type:" colon={false}>
        <Radio.Group>
          <Radio value="a">Wanted</Radio>
          <Radio value="b">Looking for a new home</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
}

export default SearchBox
