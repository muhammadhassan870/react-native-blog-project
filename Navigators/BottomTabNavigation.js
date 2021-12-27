import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";
import TopBarNavigation from './TobBarNavigation';
import Search from '../Screens/Search'; 
import About from '../Screens/About'; 
// import ShowBlog from  '../Blog/ShowBlog'
// import {LogBox, Dimensions, Platform} from 'react-native';
// import IndexFile from './Blog/ShowBlog';
// import EStyleSheet from 'react-native-extended-stylesheet';

// const entireScreenWidth = Dimensions.get('window').width;
// EStyleSheet.build({
//   $rem: entireScreenWidth / (Platform.OS == 'ios' ? 700 : 900),
// });




function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#03cafc" }}>
      <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>Home is here!</Text>
    </View>
  );
}

function search({ navigation }) {
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#c203fc" }}>
    //   <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>Search is herefvefrve!</Text>
    //   {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    // </View>
<View >

<Search/>
</View>
  );
}

function about({ navigation }) {
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#48d969" }}>
    //   <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "800" }}>About is here!</Text>
    //   {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    // </View>
<View>
<About/>
</View>

  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#03cafc',
      }}
    >
      <Tab.Screen
        name="Home"
        component={TopBarNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name={Platform.OS === 'ios' ? "ios-home" : "md-home"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name={Platform.OS === 'ios' ? "ios-search" : "md-search"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name={Platform.OS === 'ios' ? "ios-information-circle" : "md-information-circle"} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function TabNavigation() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}