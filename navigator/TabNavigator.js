import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTabProduct, MyTabNew, MyTabCircle } from "./StackNavigator"

import TabBarIcon from "../components/NavigationTabBarIcon.js"


const Tab = createBottomTabNavigator();



const MyTab = () => {
    return(
        <NavigationContainer >
            <Tab.Navigator 
                screenOptions={
                    ({route}) => TabBarIcon(route)
                }>
                <Tab.Screen
                    name="Home"
                    component={MyTabProduct}
                />
                <Tab.Screen
                    name="New"
                    component={MyTabNew}
                />
                <Tab.Screen
                    name="MyCircle"
                    component={MyTabCircle}
                />
            </Tab.Navigator>
            
        </NavigationContainer>
        
    )
}

export default MyTab;