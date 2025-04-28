import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  return (
    <div className='card-list grid grid-cols-4 gap-4'>
      {robots?.map(i => {
        return <Card key={i.id} user={i} />
      })}
    </div>
  )
}

export default CardList
