// @flow
import { AsyncStorage } from 'react-native'

const Set = (key: string, value: any) => {
  if (!key) return null
  return AsyncStorage.setItem(key, JSON.stringify({ value }))
}

const Get = async (key: string) => {
  if (!key) return null
  return AsyncStorage.getItem(key).then((str: string) => (str ? JSON.parse(str).value : null))
}

const Remove = (key: string) => {
  if (!key) return null
  return AsyncStorage.removeItem(key)
}

export default { Set, Get, Remove }
