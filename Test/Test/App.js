import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/screen/Home';
import Detail from './src/screen/Detail';
import Cart from './src/screen/Cart';
import Thanks from './src/screen/Thanks';
import Buy from './src/screen/Buy';
import Drawer from './src/drawer';
import Seacrh from './src/screen/search';

const AppNavigator = createStackNavigator({

  Drawer : Drawer,
  Home: Home,
  Detail: Detail,
  Buy: Buy,
  Cart : Cart,
  Thanks : Thanks,
  Search : Seacrh,

},
{
  defaultNavigationOptions: {
    header:null,
    headerStyle: {
      backgroundColor: '#f4511e',
     
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default createAppContainer(AppNavigator);