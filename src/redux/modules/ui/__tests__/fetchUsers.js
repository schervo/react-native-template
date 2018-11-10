// @flow
import createStore from 'src/redux/store'

import {
  fetchUsers,
  FETCH_USERS_REJECTED,
  FETCH_USERS_PENDING,
} from '../actions'
import { FetchUsersResponseMock } from '../api/fetchUsers'

describe('Fetch Users', () => {
  let store

  beforeAll(() => {
    store = createStore
  })

  const pendingAction = () => test('fetch users pending', async () => {
    await store.dispatch({
      type: FETCH_USERS_PENDING,
    })
    expect(store.getState().ui).toEqual(
      expect.objectContaining({
        isFetching: true,
      }),
    )
  })

  describe('Fetch Users reject', () => {
    pendingAction()

    test('reject action', async () => {
      await store.dispatch({
        type: FETCH_USERS_REJECTED,
        error: 'Network error',
      })
      expect(store.getState().ui).toMatchObject({
        error: 'Network error',
        isFetching: false,
      })
    })
  })
  describe('Fetch Users reject', () => {
    pendingAction()

    test('fulfilled action', async () => {
      await store.dispatch(fetchUsers())
      expect(store.getState().ui).toMatchObject({
        isFetching: false,
        users: FetchUsersResponseMock,
      })
    })
  })
})
