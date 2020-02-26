import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import InputScreen from './screens/InputScreen';
import OutputScreen from './screens/OutputScreen';

const MainNavigator = createStackNavigator({
  Input: { screen: InputScreen },
  Output: { screen: OutputScreen }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
}
);

const App = createAppContainer(MainNavigator);
export default App;