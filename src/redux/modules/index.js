import { combineReducers } from 'redux'
import auth from 'src/redux/modules/auth'

const rootReducer = combineReducers({
  auth,
})

export default rootReducer
