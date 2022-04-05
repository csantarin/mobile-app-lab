import { createStackNavigator } from 'react-navigation-stack';

import Screen2 from '../views/Screen2';
import Screen5 from '../views/Screen5';
import Screen4 from '../views/Screen4';
import Screen1 from '../views/Screen1';
import Screen3 from '../views/Screen3';

import { MainRoutes } from './mainRoutes';

export const MainScreens = createStackNavigator(
  {
    [MainRoutes.Screen1]: {
      screen: Screen1,
    },
    [MainRoutes.Screen2]: {
      screen: Screen2,
    },
    [MainRoutes.Screen3]: {
      screen: Screen3,
    },
    [MainRoutes.Screen4]: {
      screen: Screen4,
    },
    [MainRoutes.Screen5]: {
      screen: Screen5,
    },
  },
  {
    initialRouteName: MainRoutes.Screen1,
  },
);
