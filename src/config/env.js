// @flow
const {
  API_URL,
  MOCK_API,
} = process.env

type Env = {|
  API_URL: string,
  MOCK_API: boolean,
|}

const env: Env = {
  MOCK_API: MOCK_API === 'true',
  API_URL: API_URL || '',
}

export default env
