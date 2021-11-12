import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabBarIcon(route) {
    return({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={'home'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'New') {
              return (
                <Ionicons
                  name={'list'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'DatabaseViewer') {
              return (
                <Ionicons
                  name={'albums'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'MyCircle') {
              return (
                <Ionicons
                  name={'person'}
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
    })
};