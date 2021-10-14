/*
 Modify this component so that when the user presses a button (red,green, or blue)
 the corresponding component is shown beneath it. If they press "all" then
 all are shown. The initial configuration is 'all'.
*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

const RedComponent = () => {
  return ( <View style={{flex:1,backgroundColor:'pink'}}><Text>Red</Text> </View> )
}
const GreenComponent = () => {
  return ( <View style={{flex:1,backgroundColor:'lightgreen'}}><Text>Green</Text> </View> )
}
const BlueComponent = () => {
  return(
    <View style={{flex:1,backgroundColor:'lightblue'}}>
      <Text>Blue</Text>
    </View>
  )
}

const AllComponent = () => {
  return(
    <View style={{flex:1}}>
      <RedComponent/>
      <GreenComponent/>
      <BlueComponent/>
    </View>
  )
}

export default function ConditionalRendering() {
  const [color, setColor] = useState("All")
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
          Conditional Rendering
      </Text>
      <View style={{flexDirection:'row',justifyContent:'space-around', flex:1, alignItems:"center"}}>
          <Button
            title="red"
            color="red"
            onPress={()=>{setColor("Red")}}
          />
          <Button
            style={{high:400}}
            title="green"
            color="green"
            onPress={()=>{setColor("Green")}}
          />
          <Button
            title="blue"
            color="blue"
            onPress={()=>{setColor("Blue")}}
          />
          <Button
            title="all"
            color="gray"
            onPress={()=>{setColor("All")}}
          />
      </View>
      <View style={{flex:2, justifyContent:"stretch", flexDirection:"column"}}>
        <Text style={{fontSize:32}}>Selection: {color}</Text>
        {color=="Red"?<RedComponent/>:null}
        {color=="Green"?<GreenComponent/>:null}
        {color=="Blue"?<BlueComponent/>:null}
        {color=="All"?<AllComponent/>:null}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
  },
  header: {
    flex: 1,
    fontSize:32,
    padding:25,
    color:"red",
    backgroundColor:'black',
  }
});
