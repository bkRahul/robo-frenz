import React from 'react'
import ReactDOM from 'react-dom/client'
import { createLogger } from 'redux-logger'
import { fetchRobots, searchRobots } from './store/reducer.js'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import { thunk } from 'redux-thunk'

const logger = createLogger()
const rootReducer = combineReducers({ searchRobots, fetchRobots })
const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
