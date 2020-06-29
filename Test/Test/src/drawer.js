import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from './screen/Home';
//import User from './Screens/User';


const MyDrawerNavigator = createDrawerNavigator({
    
        Home:Home,
//        User:User,
    } 
  ,
   {
    drawerWidth:'45%',
    //contentComponent: props=> <SlideMenuScreen{...props}/>
    }
  
  );
 export default createAppContainer(MyDrawerNavigator);
