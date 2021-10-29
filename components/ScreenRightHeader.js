import React from 'react';
import {Button, Image, Text, View } from 'react-native';

export function HeaderLeft() {
    return (
        <Image
            style={{ width: 60, height: 30 }}
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
