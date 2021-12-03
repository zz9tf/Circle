import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTabProduct, MyTabNew, MyTabCircle } from "./StackNavigator"

import TabBarIcon from "./NavigationTabBarIcon.js"
import ValueProvider,{useValue} from "./userInfProvider.js"

const Tab = createBottomTabNavigator();

const MyTab = () => {
    const user = {
        appURL: "https://afternoon-taiga-68507.herokuapp.com",
        userName: "",
        password: "",
        gender: "",
        email: "",
        phoneNumber: "",
        institution: "",
        validated: false,
        login: false}
    
    return(
        <ValueProvider value={user}>
            <NavigationContainer>
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
        </ValueProvider>
    )
}

export default MyTab;