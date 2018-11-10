import React from 'react'
import { Provider } from 'react-redux'
import AppNavigator from './navigation'
import configureStore from './redux/store'

function App() {
  return (
    <Provider store={configureStore}>
      <AppNavigator />
    </Provider>
  )
}

export default App
