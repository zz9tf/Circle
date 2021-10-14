import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

import MainScreen from "./screens/MainScreen.js"
import AboutScreen from "./screens/AboutScreen.js";
import ProductsScreen from "./screens/ProductsScreen.js";
import NewEditScreen from "./screens/NewEditScreen.js";
import NewPreviewScreen from "./screens/NewPreviewScreen.js";
import DatabaseViewer from "./screens/DatabaseViewer.js";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{title: "Circle"}}
        />

        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{title: "About"}}
        />

        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{title: "Products"}}
        />

        <Stack.Screen
          name="NewEditScreen"
          component={NewEditScreen}
          options={{title: "NewEditScreen"}}
          initialParams={{
            initName: "",
            initPrice: "",
            initImage: "",
            initDescribe: ""
          }}
        />

        <Stack.Screen
          name="NewPreviewScreen"
          component={NewPreviewScreen}
          options={{title: "NewPreviewScreen"}}
        />

        <Stack.Screen
          name="DatabaseViewer"
          component={DatabaseViewer}
          options={{title: "databaseViewer"}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
