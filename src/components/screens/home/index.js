// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import type { State } from 'src/redux/modules'
import { switchTextColor } from 'src/redux/modules/ui/actions'

import Component from './home'

type StateProps = {|
  +textColor: ?string,
|}

const mapStateToProps = (state: State): StateProps => ({
  textColor: state.ui.textColor,
})

type DispatchProps = {|
  +switchTextColor: typeof switchTextColor,
|}

const mapDispatchToProps = (dispatch): DispatchProps =>
  bindActionCreators(
    {
      switchTextColor,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
export type ReduxProps = StateProps & DispatchProps
