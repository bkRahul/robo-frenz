import { useEffect } from 'react'
import './App.css'
import Search from './components/Search'
import CardList from './components/CardList'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRobots } from './store/actions'

function App() {
  const dispatch = useDispatch()

  const searchQuery = useSelector(state => state?.searchRobots?.searchQuery)
  const robots = useSelector(state => state?.fetchRobots?.robots)

  useEffect(() => {
    dispatch(fetchRobots())
  }, [])

  const filteredRobots = robots?.filter(i =>
    i.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  console.log(filteredRobots)

  return (
    <>
      <div className='container '>
        <Search />
        <CardList robots={filteredRobots} />
      </div>
    </>
  )
}

export default App
