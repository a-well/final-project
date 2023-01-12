import React from 'react';
import { Select } from 'antd'
import useApi from 'hooks/useApi'

const { Option } = Select

const PokemonSelect = (props, ref) => {
  const { isLoading, data: pokemons = [] } = useApi('/api/pokemons.json')

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Select placeholder="Pokemon name" ref={ref} {...props}>
      {pokemons && pokemons.map((p) => (
        <Option value={p.id.toString()} key={p.id}>{p.name}</Option>
      ))}
    </Select>

  )
}
export default React.forwardRef(PokemonSelect)
