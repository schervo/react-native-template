// @flow
import { combineReducers } from 'redux'
import ui, { type State as UIState } from 'src/redux/modules/ui'

export type RootReducerState = {|
  ui: UIState,
|}

const rootReducer = combineReducers({
  ui,
})

export default rootReducer
