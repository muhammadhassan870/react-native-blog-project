import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../Header/Header';
import SearchBar from '../Components/SearchBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';


//indexfile material

import {LogBox, Dimensions, Platform} from 'react-native';
import IndexFile from '../Blog/ShowBlog';
import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({
  $rem: entireScreenWidth / (Platform.OS == 'ios' ? 300 : 400),
});







//contact
export default function Search() {
    
    return (
//   <View>        
      <SafeAreaProvider>
          <SearchBar/>
        <IndexFile/> 

        </SafeAreaProvider>


    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//       },
//     content: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#c203fc'
//     },
//     text: {
//         fontSize: 20,
//         color: '#ffffff',
//         fontWeight: '800'
//     }
// })