import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppNavigator from './src/navigation/AppNavigator'
import rootReducer from './src/store/reducers'

const store=createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  )
}
