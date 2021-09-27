import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

const NewEditScreen = ({ route, navigation }) => {
  const {name, describe, image} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerText}>
              Post my products
          </Text>
      </View>
      <View style={{flex:10}}>
        <View style={styles.horizontal}>
          <View style={{flexDirection:'column', flex:1, alignItems: 'center',
            justifyContent: 'stretch', margin: 20}}>
            <Text> {name} </Text>
            <Image
              style={{width: 400, height: 400,}}
              source={{uri:image}}
            />
          </View>
          <View style={styles.vertical}>
            <Text> Descibe my products: </Text>
            <View style={{height:400}}>
              <Text>
                {describe}
              </Text>
            </View>
            <Button
              color='red'
              title='Edit'
              onPress = {() => navigation.navigate({
                    name: "NewEditScreen",
                    params: { initName: name, initDescribe: describe, initImage:image}
              })}
            />
          </View>

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
    justifyContent: 'stretch',
  },
  header: {
    flex:2,
    alignItems:'center',
    backgroundColor:'black'
  },
  headerText: {
    flex:1,
    alignItems:'center',
    fontSize:64,
    padding:25,
    color:"yellow",
  },
  vertical: {
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'lightgreen',
  },
  horizontal: {
    flex:1,
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'lightgreen',
  },
  input:{
    backgroundColor: 'white',
    color: 'black',
    height: 400,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  formBox:{
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'#fffff5',
  },
});

export default NewEditScreen;
