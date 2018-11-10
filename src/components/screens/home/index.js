// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import type { RootReducerState } from 'src/redux/modules'
import { switchTextColor, fetchUsers } from 'src/redux/modules/ui/actions'

import Component from './home'

type StateProps = {|
  +textColor: ?string,
|}

const mapStateToProps = (state: RootReducerState): StateProps => ({
  textColor: state.ui.textColor,
})

type DispatchProps = {|
  +switchTextColor: typeof switchTextColor,
  +fetchUsers: typeof fetchUsers,
|}

const mapDispatchToProps = (dispatch): DispatchProps => bindActionCreators(
  {
    switchTextColor,
    fetchUsers,
  },
  dispatch,
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
export type ReduxProps = StateProps & DispatchProps
