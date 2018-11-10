// @flow
import type { FetchUsersOutput } from 'src/redux/modules/ui/api'
import type { APIError, APIResponseType } from 'src/helpers/api'
import { fetchUsers as fetchUsersApi } from 'src/redux/modules/ui/api'

export const FETCH_USERS: 'react-native-template/ui/FETCH_USERS' = 'react-native-template/ui/FETCH_USERS'
export const FETCH_USERS_PENDING: 'react-native-template/ui/FETCH_USERS_PENDING' = 'react-native-template/ui/FETCH_USERS_PENDING'
export const FETCH_USERS_FULFILLED: 'react-native-template/ui/FETCH_USERS_FULFILLED' = 'react-native-template/ui/FETCH_USERS_FULFILLED'
export const FETCH_USERS_REJECTED: 'react-native-template/ui/FETCH_USERS_REJECTED' = 'react-native-template/ui/FETCH_USERS_REJECTED'

export type FetchUsersAction = {
  type: typeof FETCH_USERS,
  payload: Promise<APIResponseType<FetchUsersOutput>>,
}

export type FetchUsersActionPending = {
  type: typeof FETCH_USERS_PENDING,
}

export type FetchUsersActionFulfilled = {
  type: typeof FETCH_USERS_FULFILLED,
  payload: FetchUsersOutput,
}

export type FetchUsersActionRejected = {
  type: typeof FETCH_USERS_REJECTED,
  error: APIError,
}

export const fetchUsers = (): FetchUsersAction => ({
  type: FETCH_USERS,
  payload: fetchUsersApi(),
})
