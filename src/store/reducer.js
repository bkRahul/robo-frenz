import {
  SET_SEARCH_QUERY,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_FAILED,
} from './actionTypes'

const searchState = {
  searchQuery: '',
}

export const searchRobots = (state = searchState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload }

    default:
      return state
  }
}

const fetchRobotsState = {
  loading: false,
  robots: [],
  error: '',
}

export const fetchRobots = (state = fetchRobotsState, action) => {
  switch (action.type) {
    case FETCH_ROBOTS_PENDING:
      return { ...state, loading: action.loading }

    case FETCH_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, loading: action.loading }

    case FETCH_ROBOTS_FAILED:
      return { ...state, error: action.payload, loading: action.loading }

    default:
      return state
  }
}
