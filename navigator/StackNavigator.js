import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from "../screens/SignInScreen.js"
import LoginScreen from "../screens/LoginScreen.js"
import AboutScreen from "../screens/AboutScreen.js";
import ProductsScreen from "../screens/ProductsScreen.js";
import NewEditScreen from "../screens/NewEditScreen.js";
import NewPreviewScreen from "../screens/NewPreviewScreen.js";
import DatabaseViewer from "../screens/DatabaseViewer.js";

import {HeaderLeft, SignIn_LogInHeader} from "../components/ScreenRightHeader.js";

const Stack = createNativeStackNavigator();

const MyTabProduct = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="ProductsScreen"
            component={ProductsScreen}
            options={{
                title: "",
                headerTitleAlign: 'center',
                headerLeft: () => <HeaderLeft />,
                headerRight: ()=> <SignIn_LogInHeader />,
            }}
            />
            <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{
                title: "",
                headerTitleAlign: 'center',
                headerLeft: () => <HeaderLeft />,
                headerRight: ()=> <SignIn_LogInHeader />,
            }}
            />
            <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
                title: "",
                headerTitleAlign: 'center',
                headerLeft: () => <HeaderLeft />,
                headerRight: ()=> <SignIn_LogInHeader />,
            }}
          />
        </Stack.Navigator>
    );
  };


  const MyTabNew = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="New"
                component={NewEditScreen}
                options={{
                    title: "Sale",
                    headerTitleAlign: 'center',
                    headerRight: ()=> <SignIn_LogInHeader />,
                    headerLeft: () => <HeaderLeft />
                }}
                initialParams={{
                    initName: "",
                    initPrice: "",
                    initImage: "",
                    initDescribe: ""
                }}
            />
            <Stack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    title: "",
                    headerTitleAlign: 'center',
                    headerLeft: () => <HeaderLeft />,
                    headerRight: ()=> <SignIn_LogInHeader />,
                }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    title: "",
                    headerTitleAlign: 'center',
                    headerLeft: () => <HeaderLeft />,
                    headerRight: ()=> <SignIn_LogInHeader />,
                }}
          />
        </Stack.Navigator>
    );
  };

  const MyTabDatabaseViewer = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="DatabaseViewer"
                component={DatabaseViewer}
                options={{
                    title: "DatabaseViewer",
                    headerTitleAlign: 'center',
                    headerLeft: () => <HeaderLeft />,
                    headerRight: ()=> <SignIn_LogInHeader />,
                }}
            />
            <Stack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    title: "",
                    headerTitleAlign: 'center',
                    headerLeft: () => <HeaderLeft />,
                    headerRight: ()=> <SignIn_LogInHeader />,
                }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    title: "",
                    headerTitleAlign: 'center',
                    headerLeft: () => <HeaderLeft />,
                    headerRight: ()=> <SignIn_LogInHeader />,
            }}
          />
          
        </Stack.Navigator>
    );
  };

  const MyTabMyCircle = () => {
    return (
        <Stack.Navigator>
                <Stack.Screen
                    name="About"
                    component={AboutScreen}
                    options={{
                        title: "",
                        headerTitleAlign: 'center',
                        headerLeft: () => <HeaderLeft />,
                        headerRight: ()=> <SignIn_LogInHeader />,
                    }}
                />
                <Stack.Screen
                    name="SignInScreen"
                    component={SignInScreen}
                    options={{
                        title: "",
                        headerTitleAlign: 'center',
                        headerLeft: () => <HeaderLeft />,
                        headerRight: ()=> <SignIn_LogInHeader />,
                    }}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{
                        title: "",
                        headerTitleAlign: 'center',
                        headerLeft: () => <HeaderLeft />,
                        headerRight: ()=> <SignIn_LogInHeader />,
                    }}
                />
            </Stack.Navigator>
    );
  };

  export { MyTabProduct, MyTabNew, MyTabDatabaseViewer, MyTabMyCircle };