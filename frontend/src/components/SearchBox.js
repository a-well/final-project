import React from 'react';
import { Radio, Form, Button } from 'antd'
import queryString from 'query-string';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PokemonSelect from './PokemonSelect';

function SearchBox({ initialValues = {} }) {
  const navigate = useNavigate()
  if (!initialValues.type) {
    // eslint-disable-next-line no-param-reassign
    initialValues.type = 'wanted'
  }

  console.log('SearchBox initialvalues', initialValues)

  return (
    <Form
      initialValues={initialValues}
      onFinish={(values) => {
        const qs = queryString.stringify(values)
        navigate(`/browse?${qs}`)
      }}
    >

      <Form.Item name="type" label="Listing type:" colon={false}>
        <Radio.Group>
          <Radio value="wanted">Wanted</Radio>
          <Radio value="looking-for-a-new-home">Looking for a new home</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="Select Pokemon:"
        name="pokemonId"
        colon={false}
      >
        <PokemonSelect />
      </Form.Item>

      <Button htmlType="submit" type="primary" block>Browse Pokémon</Button>
    </Form>
  );
}

export default SearchBox
