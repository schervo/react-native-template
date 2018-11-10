// @flow
import { createStackNavigator } from 'react-navigation'
import HomeScreen from 'src/components/screens/home/home'

const Navigation = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  },
)

export default Navigation
