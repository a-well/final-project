import React, { useState } from 'react'
import {
  Button, Form, Input, Radio, Col, Row, Switch, message, Typography,
} from 'antd'
import ListingCard from 'components/ListingCard'
import postApi from 'hooks/postApi'
import { useNavigate } from 'react-router-dom'
import useUser from 'hooks/useUser'
import PokemonSelect from 'components/PokemonSelect'
import useApi from 'hooks/useApi'

const { TextArea } = Input
const { Title } = Typography

const PostListing = () => {
  const { trigger } = postApi('/api/listings')
  const { isLoading, data: pokemons = [] } = useApi('/api/pokemons.json')

  const { user } = useUser()
  const navigate = useNavigate()

  const [errors, setErrors] = useState(null)

  const [form] = Form.useForm()
  const pokemonId = Form.useWatch('pokemonId', form)
  const description = Form.useWatch('description', form)
  const location = Form.useWatch('location', form)
  const shiny = Form.useWatch('shiny', form)
  const type = Form.useWatch('type', form)

  // eslint-disable-next-line
  const getPokemon = (id) => pokemons.find((p) => p.id == id)
  const selectedPokemon = getPokemon(pokemonId)
  const pokemonImage = selectedPokemon?.image
  const pokemonImageShiny = selectedPokemon?.imageShiny
  const pokemonName = selectedPokemon?.name

  const save = async (values) => {
    const res = await trigger(values)

    if (res.errors) {
      setErrors(res.errors)
    } else {
      message.success('Listing was successfully posted')
      navigate(`/listing/${res._id}`)
    }
  }

  return (

    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
      align="top"
      justify="center"
    >
      <Col xs={24} sm={12} md={12}>
        {errors && (
          <div style={{ color: 'red' }}>
              {JSON.stringify(errors)}
          </div>
        )}
        <Form
          form={form}
          onFinish={save}
          layout="vertical"
          requiredMark={false}
          initialValues={{
            type: 'wanted',
          }}
        >
          <Title>Create a new listing</Title>

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
            <PokemonSelect />
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

      <Col xs={20} sm={12} md={6}>
        <Title level={2}>Preview</Title>

        <ListingCard
          username={user.username}
          hoverable={false}
          shiny={shiny}
          pokemonName={pokemonName}
          pokemonImage={pokemonImage}
          pokemonImageShiny={pokemonImageShiny}
          location={location}
          description={description}
          type={type}
          standalone
          preview
        />

      </Col>

    </Row>

  )
}

export default PostListing
