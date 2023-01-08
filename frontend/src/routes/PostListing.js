import React, { useState } from 'react'
import {
  Button, Form, Input, Select, Radio, Col, Row, Switch,
} from 'antd'
import ListingCard from 'components/ListingCard'
import useApi from 'hooks/useApi'
import postApi from 'hooks/postApi'
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;
const { Option } = Select

function PostListing() {
  const { trigger } = postApi('/api/listings')
  const { isLoading, data: pokemons = [] } = useApi('/api/pokemons.json')
  const navigate = useNavigate()

  const [errors, setErrors] = useState(null)
  const [redirectTo, setRedirect] = useState(null)

  const [form] = Form.useForm()
  const pokemonId = Form.useWatch('pokemonId', form)
  const description = Form.useWatch('description', form)
  const location = Form.useWatch('location', form)
  const shiny = Form.useWatch('shiny', form)

  // eslint-disable-next-line eqeqeq
  const getPokemon = (id) => pokemons.find((p) => p.id == id)
  const selectedPokemon = getPokemon(pokemonId)
  const pokemonImage = selectedPokemon?.image
  const pokemonName = selectedPokemon?.name

  if (isLoading) {
    return <div>Loading pokemons...</div>
  }

  if (redirectTo) {
    navigate(redirectTo)
    return null
  }
  const save = async (values) => {
    const res = await trigger(values)

    if (res.errors) {
      setErrors(res.errors)
    } else {
      // visa nån popup att det gick bra?
      // redirecta till din nya listing?
      // useNavigate()
      console.log(`send user to  /listing/${res._id}`)
      setRedirect(`/listing/${res._id}`)
    }
    //
    console.log(res)
  }

  return (
    <Row gutter={40} align="top" justify="center">
      <Col xs={24} sm={12}>
        {errors && (
          <div style={{ color: 'red' }}>
              {JSON.stringify(errors)}
          </div>
        )}
        <Form
          form={form}
          onFinish={save}
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

          <Form.Item
            label="Select Pokemon"
            name="pokemonId"
            rules={[
              {
                required: true,
                message: 'Please select a Pokemon',
              },
            ]}
          >
            <Select placeholder="Pokemon name">
              {pokemons.map((p) => (
                <Option value={p.id} key={p.id}>{p.name}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Shiny" name="shiny" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            tooltip="Add more details, eg. which Pokemon(s) you want to trade it for, at which hours you typically can respond to messages about the ad"
            rules={[
              {
                required: true, message: 'Please add a description or Pikachu will be sad',
              },
            ]}
          >
            <TextArea showCount maxLength={350} placeholder="Add a comment with more info" />
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
          username="unicorns_yay"
          hoverable={false}
          shiny={shiny}
          pokemonName={pokemonName}
          pokemonImage={pokemonImage}
          location={location}
          description={description}
        />
      </Col>

    </Row>
  )
}

// @TODO add doesnt matter if shiny for wanted listings only?

export default PostListing
