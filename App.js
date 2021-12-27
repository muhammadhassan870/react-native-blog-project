import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {  View, StyleSheet, ScrollView, Text } from 'react-native';
// import {Statusbar} from "expo-status-bar" ;
// import TopBarNavigation from './Navigators/TobBarNavigation';
import BottomTabNavigation from './Navigators/BottomTabNavigation';
// import StackNavigator from './Navigators/StackNavigation';
import DrawerNavigation from './Navigators/DrawerNavigation';
// import react from 'react';
import SearchBar from './Components/SearchBar';

// import RouteParamsNavigation from './Navigators/RouteParamsNavigator';

import Blog from  './Blog/Blog'


import {LogBox, Dimensions, Platform} from 'react-native';
import IndexFile from './Blog/ShowBlog';
import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({
  $rem: entireScreenWidth / (Platform.OS == 'ios' ? 300 : 400),
});


export default function App() {
    return (
        <SafeAreaProvider>
        {/* <TopBarNavigation /> */}
      
        {/* <IndexFile/> */}

          {/* <SearchBar/> */}
        <BottomTabNavigation/>

{/* <Blog/> */}
        {/* <DrawerNavigation/> */}
       
        </SafeAreaProvider>

      //   <View >
      //   <Text>Open up App.js to start working on your app!</Text>
       
      // </View>
   
    );
}

