// @flow
import createStore from 'src/redux/store'

import { switchTextColor } from '../actions'

describe('Home Screen', () => {
  let store

  beforeEach(() => {
    store = createStore
  })

  test('Change text color', () => {
    store.dispatch(switchTextColor('red'))

    expect(store.getState().ui.textColor).toBe('red')
  })
})
