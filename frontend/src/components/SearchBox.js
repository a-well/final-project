import React from 'react';

import { Input, Radio, Form } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const { Search } = Input

function SearchBox() {
  return (
    <div>
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
        <Form.Item name="type" label="Listing type">
          <Radio.Group>
            <Radio value="a">Wanted</Radio>
            <Radio value="b">Looking for a new home</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SearchBox;
