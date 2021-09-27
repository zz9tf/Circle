import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

const NewEditScreen = ({ initName, initDescribe, initImage, navigation }) => {

  const [name, setName] = React.useState(initName);
  const [describe, setDescribe] = React.useState(initDescribe);
  const [image, setImage] = React.useState(initImage);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerText}>
              Post my products
          </Text>
      </View>
      <View style={{flex:10}}>
        <View style={styles.horizontal}>
          <View style={styles.vertical}>
            <Text> Product Name: </Text>
            <View style={{alignItems: "center"}}>
              <TextInput
                style={{backgroundColor: 'white', color: 'black', height: 30,
                 width: 400, margin: 12, borderWidth: 1, padding: 10,}}
                placeholder="Product name"
                onChangeText={text => {setName(text)}}
              />
              <Image
                style={{
                  borderColor: "black",
                  borderWidth:1,
                  backgroundColor: "white",
                  width: 400,
                  height: 400 }}
                source={{uri:image}}
              />
              <TextInput
                style={{backgroundColor: 'white', color: 'black', height: 40,
                 width: 400, margin: 12, borderWidth: 1, padding: 10,}}
                placeholder="Input my image..."
                onChangeText={text => {setImage(text)}}
              />
            </View>
          </View>
          <View style={styles.vertical}>
            <Text> Descibe my products: </Text>
            <View style={{alignItems: 'center'}}>
              <TextInput
              multiline
              numberOfLines={10}
              style={styles.input}
              placeholder="Text here..."
              onChangeText={text => {setDescribe(text)}}
              />
              <Button
                color='red'
                title='Post'
                onPress = {() => {
                  navigation.navigate('NewPreviewScreen', {
                    name: name,
                    describe: describe,
                    image: image,
                  })
                }}
              />
            </View>
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
    flexDirection:'column',
    flex:1,
    alignItems: 'stretch',
    justifyContent: 'stretch',
    margin: 20,
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
    width: 400,
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
