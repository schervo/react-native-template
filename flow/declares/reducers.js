// @flow
import type { RootReducerState } from '../src/redux/modules'

declare type GlobalFSA<T> = {
  type: string,
  payload?: T,
  error?: boolean,
  meta?: Object,
}

declare type GlobalGetState = () => RootReducerState
declare type GlobalThunkAction = (
  // eslint-disable-next-line no-use-before-define
  dispatch: GlobalDispatch<*>,
  getState: GlobalGetState,
) => any
declare type GlobalPromiseAction<T> = Promise<GlobalFSA<T>>
declare type GlobalDispatch<T> = (
  action: GlobalFSA<T> | GlobalThunkAction | GlobalPromiseAction<T>,
) => any

type _ExtractReturn<B, F: (...args: any[]) => B> = B
export type ExtractReturn<F> = _ExtractReturn<*, F>
