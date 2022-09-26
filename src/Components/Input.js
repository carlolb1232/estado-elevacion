import React from 'react'

export const Input = ({ filter, setFilter }) => {
  return (
    <input
      value={ filter }
      onChange={ e=>setFilter(e.target.value) }
    />
  )
}
