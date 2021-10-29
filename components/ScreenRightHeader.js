import React from 'react';
import {Button, Image, Text, View } from 'react-native';

export function HeaderLeft() {
    return (
        <Image
            style={{ width: 100, height: 50, margin: 20 }}
            source={require("../images/Circle.png")} />
    );
};

export function SignIn_LogInHeader(){
    return(
        <View style={{flexDirection:"row", justifyContent:'center', width:120}}>
            <View style={{flex:1}}>
                <Text
                onPress={()=> {}}
                >
                    Sign in
                </Text>
            </View>
            <View style={{flex:1}}>
                <Text 
                onPress={()=> {}}
                >
                    Log in
                </Text>
            </View>
           
            
        </View>
    )
}
