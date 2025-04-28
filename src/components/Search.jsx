import { useDispatch } from 'react-redux'
import { setSearchQuery } from '../store/actions'

const Search = () => {
  const dispatch = useDispatch()

  return (
    <div className='place-content-center my-12'>
      <input
        onChange={e => dispatch(setSearchQuery(e.target.value))}
        type='text'
        name='name'
        id='name'
        className='rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      />
    </div>
  )
}

export default Search
