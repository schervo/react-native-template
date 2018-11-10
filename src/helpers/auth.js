// @flow
import vars from 'src/config/variables'
import Storage from './storage'

const { appAuthTokenKey } = vars

export const getAuthToken = () => Storage.Get(appAuthTokenKey).then(authToken => authToken || null)

export const setAuthToken = (token: string) => {
  Storage.Set(appAuthTokenKey, token)
}

export const removeAuthToken = () => {
  Storage.Remove(appAuthTokenKey)
}
