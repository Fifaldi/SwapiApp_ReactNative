import { createAppContainer }  from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import mainScreen from './src/screens/mainScreen';

const navigator = createStackNavigator({
  Main: mainScreen
},
{
  initialRouteName: 'Main',
  defaultNavigationOptions:{
    title: 'Star Wars wiki'
  }
}
)
export default createAppContainer(navigator);