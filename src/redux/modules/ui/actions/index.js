// @flow
/* eslint-disable import/prefer-default-export */

export { switchTextColor, SWITCH_TEXT_COLOR } from './switchTextColor'
export type { SwitchTextColorAction } from './switchTextColor'

export {
  fetchUsers,
  FETCH_USERS,
  FETCH_USERS_PENDING,
  FETCH_USERS_FULFILLED,
  FETCH_USERS_REJECTED,
} from './fetchUsers'
export type {
  FetchUsersAction,
  FetchUsersActionPending,
  FetchUsersActionFulfilled,
  FetchUsersActionRejected,
} from './fetchUsers'
