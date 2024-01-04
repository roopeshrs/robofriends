import React from 'react'

const Card = ({user}) => {
  return (
    <div className='bg-blue-300 flex flex-col w-64 gap-4 items-center rounded-xl p-4 cursor-pointer'>
        <img src={`https://robohash.org/${user.id}`} className='w-60 h-60 object-cover'/>
        <h2 className='text-xl font-semibold'>{user.name}</h2>
        <h5 className='text-sm'>{user.email}</h5>
    </div>
  )
}

export default Card