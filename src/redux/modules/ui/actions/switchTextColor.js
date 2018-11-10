// @flow

export const SWITCH_TEXT_COLOR: string = 'react-native-template/ui/SWITCH_TEXT_COLOR'

export type SwitchTextColorAction = {|
  type: typeof SWITCH_TEXT_COLOR,
  payload: {
    color: string,
  },
|}

export const switchTextColor = (color: string): SwitchTextColorAction => ({
  type: SWITCH_TEXT_COLOR,
  payload: {
    color,
  },
})
