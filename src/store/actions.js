import {
  FETCH_ROBOTS_FAILED,
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  SET_SEARCH_QUERY,
} from './actionTypes'

export const fetchRobots = () => dispatch => {
  dispatch({ type: FETCH_ROBOTS_PENDING, loading: true })
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(robots =>
      dispatch({ type: FETCH_ROBOTS_SUCCESS, payload: robots, loading: false })
    )
    .catch(err =>
      dispatch({ type: FETCH_ROBOTS_FAILED, error: err, loading: false })
    )
}

export const setSearchQuery = query => ({
  type: SET_SEARCH_QUERY,
  payload: query,
})
