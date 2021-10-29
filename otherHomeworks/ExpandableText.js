import React from "react";
import {View, Button, Text} from "react-native";
import {useState} from "react"

const ExpandableText = ({title, text}) => {
  const [isShow, setIsShow] =  useState(true);
  return(
    <View backgroundColor="pink" style={{flexDirection: "row"}}>
      <Button
        title={title}
        onPress={() => setIsShow(!isShow)}
      />
      {isShow? <Text>{text}</Text>:<View></View>}
    </View>
  )
}

export default ExpandableText;
