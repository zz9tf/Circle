
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={{flex:2, alignItems:'center',backgroundColor:'navy'}}>
          <Text style={styles.headerText}>
              Welcome to Circle!
          </Text>
      </View>
      <View style={{flex:12, flexDirection:"column"}}>
        <View style={styles.horizontal}>
          <Image
             style={{width:"25%", resizeMode:'contain'}}
             source={{uri:'https://cdn.icon-icons.com/icons2/2534/PNG/512/effective_employees_users_team_group_icon_152042.png'}}/>
          <Text style={styles.header}>Effective!</Text>
        </View>
        <View style={styles.horizontal}>
          <Image
            style={{width:"25%", resizeMode:'contain'}}
            source={{uri:'https://clearconvenience.com/images/braces-convenience.svg'}}/>
          <Text style={styles.header}>Convenience!</Text>
        </View>
        <View style={styles.horizontal}>
          <Image
            style={{width:"25%", resizeMode:'contain'}}
            source={{uri:'https://clearconvenience.com/images/braces-value.svg'}}/>
          <Text style={styles.header}>Value!</Text>
        </View>
        <View style={styles.horizontal}>
          <Image
            style={{width:"25%", resizeMode:'contain'}}
            source={{uri:'https://clearconvenience.com/images/braces-reliability.svg'}}/>
          <Text style={styles.header}>Reliable!</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    flexDirection: "column"
  },
  headerText: {
    flex:1,
    alignItems:'center',
    fontSize:64,
    padding:25,
    color:"white",
  },
  vertical: {
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',
    backgroundColor:'green',
  },
  horizontal: {
    flex:3,
    flexDirection:'row',
    alignItems: 'stretch',
    backgroundColor:'oldlace',
  },
  upperLeft:{
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderWidth: 5,
    flexDirection:'row',
  },
  centered:{
    flex:1,
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    borderWidth: 5,
    borderColor: 'red',
    padding:10,
    margin:20,
  },
  lowerRight:{
    flex:1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderWidth: 5,
    flexDirection:'row',
  },
  input:{
    color: 'black',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  formBox:{
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',
    backgroundColor:'#fffff5',
  },
});
