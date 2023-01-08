import React from 'react'
import {
  Button, Form, Input, Select, Radio, Col, Row,
} from 'antd'
import ListingCard from 'components/ListingCard'

const { TextArea } = Input;
const { Option } = Select

function PostListing() {
  const [form] = Form.useForm();
  const pokemonType = Form.useWatch('type', form);
  const description = Form.useWatch('description', form);
  const location = Form.useWatch('location', form);
  const shiny = Form.useWatch('shiny', form) === '1'
  console.log(shiny)

  return (
    <Row gutter={40} align="top" justify="center">
      <Col xs={24} sm={12}>
        <Form
          form={form}
          layout="vertical"
          style={{ width: '350px' }}
          requiredMark={false}
          initialValues={{
            type: 'wanted',
          }}
        >
          <h1 style={{ textTransform: 'uppercase' }}>Create a new listing</h1>

          <Form.Item label="Listing type" name="type">
            <Radio.Group>
              <Radio value="wanted">Wanted</Radio>
              <Radio value="looking-for-a-new-home">Looking for a new home</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Location"
            name="location"
            rules={[
              {
                required: true,
                message: 'Please enter a location',
              },
            ]}
          >
            <Input placeholder="Where to meet up for trade" />
          </Form.Item>

          <Form.Item label="Select Pokemon" name="pokemonId">
            <Select placeholder="Charmander">
              <Option value="charmander">Charmander</Option>
              <Option value="anotherpokemon">Another Pokemon</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Shiny" name="shiny" tooltip="Doesn't matter can only be selected for Wanted listings">
            <Radio.Group>
              <Radio value="1">Yes</Radio>
              <Radio value="0">No</Radio>
              <Radio value="c" disabled>Doesn't matter</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Description" name="description">
            <TextArea showCount maxLength={350} placeholder="Here you can add lorem lorem" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>

      <Col xs={24} sm={12}>
        <h3 style={{ textTransform: 'uppercase' }}>Preview</h3>
        <ListingCard
          pokemonImage="https://lorempokemon.fakerapi.it/pokemon/350"
          username="unicorns_yay"
          hoverable={false}
          shiny={shiny}
          pokemonName="Mew"
          location={location}
          description={description}
        />
      </Col>

    </Row>
  )
}

// @TODO add doesnt matter if shiny for wanted listings only?

export default PostListing
