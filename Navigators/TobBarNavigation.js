import * as React from 'react';
import { Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';


//indexfile material

import {LogBox, Dimensions, Platform} from 'react-native';
import Recommended from '../Blog/Recommended';
import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({
  $rem: entireScreenWidth / (Platform.OS == 'ios' ? 300 : 400),
});



function following() {
  // const insets = useSafeAreaInsets();
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#03cafc" }}>
        <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>following page is here!</Text>
      </View>
    );
  }
  
  function recommended({ navigation }) {
    const insets = useSafeAreaInsets();
    return (

      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#c203fc" }}>
      //   <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>recommended page is here!</Text>
      //   {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      // </View>


      <SafeAreaProvider>
     
    <Recommended/> 

    </SafeAreaProvider>


    );
  }
  
  function About({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#48d969" }}>
        <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>About is here!</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  // const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'black',
        labelStyle: { fontSize: 12 },
        // style: { backgroundColor: 'white', marginTop: insets.top },
      }}
    >  
    <Tab.Screen
        name="following"
        component={following}
        options={{ tabBarLabel: 'following' }}
      />
      <Tab.Screen
        name="recommended"
        component={recommended}
        options={{ tabBarLabel: 'recommended' }}
      />
      </Tab.Navigator>
  );
}
export default function TopBarNavigation() {
  return <MyTabs />
    // Remove in case of stack navigators !IMPORTANT
       
}