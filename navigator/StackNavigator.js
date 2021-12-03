import React, {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from "../screens/SignInScreen.js";
import LoginScreen from "../screens/LoginScreen.js";
import ProductsScreen from "../screens/ProductsScreen.js";
import UserScreen from "../screens/UserScreen.js";
import AboutScreen from "../screens/AboutScreen.js";
import PostScreen from "../screens/PostScreen.js";

const Stack = createNativeStackNavigator();

const commonScreen = (Stack) => {
    return [
        <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
                title: "Sign in",
                headerTitleAlign: 'center'
            }}
        />,
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
                title: "Login",
                headerTitleAlign: 'center'
            }}
        />
    ]
}

const MyTabProduct = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProductsScreen"
                component={ProductsScreen}
                options={{
                    title: "",
                    headerTitleAlign: 'center'
                }}
            />
            {commonScreen(Stack)}
        </Stack.Navigator>
    );
  };


  const MyTabNew = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="New"
                component={PostScreen}
                options={{
                    title: "",
                    headerTitleAlign: 'center'
                }}
               /*  initialParams={{
                    name: ""
                }} */
            />
            {commonScreen(Stack)}
        </Stack.Navigator>
    );
  };

  const MyTabCircle = () => {
    return (
        <Stack.Navigator>
                <Stack.Screen
                    name="User"
                    component={UserScreen}
                    options={{
                        title: "",
                        headerTitleAlign: 'center'
                    }}
                />
                <Stack.Screen
                    name="About"
                    component={AboutScreen}
                    options={{
                        title: "About",
                        headerTitleAlign: 'center'
                    }}
                />
                {commonScreen(Stack)}
            </Stack.Navigator>
    );
  };

  export { MyTabProduct, MyTabNew, MyTabCircle };