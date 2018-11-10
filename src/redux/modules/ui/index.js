// @flow

import * as actions from './actions'

import type { User } from './types'

export type Actions =
  | actions.FetchUsersActionPending
  | actions.FetchUsersActionFulfilled
  | actions.FetchUsersActionRejected
  | actions.SwitchTextColorAction

export type State = {|
  +textColor: ?string,
  +isFetching: boolean,
  +users: Array<User>,
  +error: ?string,
|}

const initialState: State = {
  textColor: null,
  isFetching: false,
  users: [],
  error: null,
}

const reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case actions.SWITCH_TEXT_COLOR:
      return {
        ...state,
        textColor: action.payload.color,
      }

    case actions.FETCH_USERS_PENDING:
      return {
        ...state,
        isFetching: true,
      }
    case actions.FETCH_USERS_FULFILLED:
      return {
        ...state,
        isFetching: false,
        users: action.payload.data,
      }

    case actions.FETCH_USERS_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }

    default:
      return state
  }
}

export default reducer
