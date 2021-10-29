import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Quiz3 = () => {
  const pi = 3.14159265359;
  const [radius, setRadius] = useState();
  const [height, setHeight] = useState();
  const [gallon,setGallon] = useState("???");
  const [showLog, setShowLog] = useState(false);

  const storeData = async () => {
    const jsonValue = JSON.stringify({
        radius: radius,
        height: height
     })
    await AsyncStorage.setItem("@quiz3", jsonValue)
  }

  const getData = async () => {
    const value = JSON.parse(await AsyncStorage.getItem("@quiz3"));
    setRadius(value.radius);
    setHeight(value.height);
    setGallon((value.radius*value.radius*pi*value.height/231).toFixed(2));
  }


  useEffect(() => {
    getData();
  }
    ,[]);

  return(
    <View style={{flexDirection: "column", flex:1}}>
      <View style={{background: "lightGreen", alignSelf: 'flex-start'}}>
        <Text style={{fontSize:72}}>
          Quiz3
        </Text>
        <Text style={{fontSize: 20}}>
          CS153a Fall21
        </Text>
        <Text style={{fontSize: 20}}>
          Write the code for this App, including this text!
        </Text>
      </View>
      <Text style={{fontSize: 20}}>
        Enter the radius and the height of a cylinder in inches and
         we will calculate the volume in gallons. A 6 inch radius
         and 12 inch height will have volume 5.88. Divide cubic
        inches by 231 to get gallons, and show only 2 digits after
        the decimal point in the volume.
      </Text>
      <Text style={{background:"lightPink", width:400, fontSize: 20}}>
      radius:
      <TextInput
        style={{fontSize:20, marginLeft: 10}}
        placeholder="radius"
        onChangeText={text => {setRadius(text)}}
        value={radius}
      />
      </Text>
      <Text style={{background:"lightPink", width:400, fontSize: 20}}>
      height:
      <TextInput
        style={{fontSize:20, marginLeft: 10}}
        placeholder="height"
        onChangeText={text => {setHeight(text)}}
        value={height}
      />
      </Text>
      <View style={{alignItems: 'flex-start'}}>

      <TouchableOpacity
        style={{background:"green"}}
        onPress={()=>{
          setGallon((radius*radius*height*pi/231).toFixed(2));
          storeData();
        }}
      >
        <Text style={{alignSelf:"flex-start", color: "white", fontSize:23,margin:10}}>
          CALCULATE VOLUME
        </Text>
      </TouchableOpacity>
      <Text style={{background:"lightPink", width:500, fontSize: 20}}>
        The volume is {gallon} gallons
      </Text>

      <TouchableOpacity
        style={{background:"dodgerblue"}}
        onPress={()=>{setShowLog(!showLog)}}
      >
        <Text style={{alignSelf:"flex-start", color: "white", fontSize:23,margin:10}}>
          TOGGLE CALCULATIONS VIEW
        </Text>
      </TouchableOpacity>
      {showLog?
        <View style={{flexDirection:1}}>
          <Text style={{fontSize:20}}>
          radius = {radius} inches
          </Text>
          <Text style={{fontSize:20}}>
          height = {height} inches
          </Text>
          <Text style={{fontSize:20}}>
          area of base = pi*r*2 {radius*radius*pi} square inches
          </Text>
          <Text style={{fontSize:20}}>
          volume of cylinder = {radius*radius*pi*height} cubic inches
          </Text>
          <Text style={{fontSize:20}}>
          volume of cylinder = {radius*radius*pi*height/231} gallons
          </Text>
        </View>
        :<View> </View>}
      </View>
    </View>
  )
}
export default Quiz3;
