// @flow

import * as actions from './actions'

export type State = {|
  +textColor: ?string,
|}

const initialState: State = {
  textColor: null,
}

type Action = actions.SwitchTextColorAction

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actions.SWITCH_TEXT_COLOR:
      return {
        ...state,
        textColor: action.payload.color,
      }

    default:
      return state
  }
}

export default reducer
