import { createStackNavigator } from 'react-navigation-stack';
import { defaultNavigationOptions } from '../utils/navigation';

const HomeStack = createStackNavigator(
  {
    Home: {
      getScreen: () => require('../views/home/home').default,
    },
    Chat: {
      getScreen: () => require('../views/home/ChatModule/Chat').default,
    },
    MyTeam: {
      getScreen: () => require('../views/home/MyTeam').default,
    },
    TrainerPlan: {
      getScreen: () => require('../views/home/TrainerPlan').default,

    }
  },
  {
    defaultNavigationOptions,
  },
);
HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  for (let i = 0; i < navigation.state.routes.length; i++) {
    if (navigation.state.routes[i].routeName == "TrainerPlan") {
      tabBarVisible = false;
    } else {
      defaultNavigationOptions
    }
  }

  return {
    tabBarVisible
  };
};
export default HomeStack;
