import React, { useState } from "react";
import { Button, StyleSheet, Text,  View } from "react-native";
import ExpandableText from './ExpandableText'


const App = () => {

      return (
  <View>
    <Text style={{fontSize:20}}>ExpandableText Demo</Text>
    <ExpandableText title="A" text="This is the 1st letter of the alphabet"/>
    <ExpandableText title="M" text="This is the middle letter"/>
    <ExpandableText title="Z" text="This is the last letter of the alphabet"/>
  </View>
      );
  }
export default App;
