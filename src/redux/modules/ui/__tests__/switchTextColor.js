// @flow
import { createStore } from 'redux'
import rootReducer from 'src/redux/modules'

import { switchTextColor } from '../actions'

describe('Home Screen', () => {
  let store

  beforeEach(() => {
    store = createStore(rootReducer)
  })

  test('Change text color', () => {
    store.dispatch(switchTextColor('red'))

    expect(store.getState().ui.textColor).toBe('red')
  })
})
