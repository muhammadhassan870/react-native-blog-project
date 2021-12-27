// import {createStackNavigator, TransitionPresets, CardStyleInterpolators} from 'react-navigation-stack';
import React from 'react';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';

import ShowBlog from './ShowBlog';

const Stack = createStackNavigator();
function AppFlow() {
    return (
        <Stack.Navigator
            headerMode="none"
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
            <Stack.Screen name="ShowBlog" component={ShowBlog} />
        </Stack.Navigator>
    );
}
export default AppFlow;