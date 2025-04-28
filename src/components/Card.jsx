const Card = ({ user }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden hover:shadow-inner hover:shadow-2xl bg-slate-900'>
      <img
        className='w-full'
        src={`https://robohash.org/${user.id}.png`}
        alt={`${user.name}`}
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-white text-xl mb-2'>{user.name}</div>
        <p className='text-white text-base'>{user.website}</p>
      </div>
    </div>
  )
}

export default Card
