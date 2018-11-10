// @flow

type InitialState = {}

const initialState: InitialState = {}

type Action = {
  type: string,
}

const reducer = (state: InitialState = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
