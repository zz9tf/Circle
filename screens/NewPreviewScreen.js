import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import GetDatabase from '../activities/getDatabase.js'
import StoreDatabase from '../activities/storeDatabase.js'
import Database from '../databases/database.js'

const NewPreviewScreen = ({ route, navigation }) => {
  const {name, describe, image, price} = route.params;
  const [products, setProducts] = useState([]);
  const debuging = true;
  const productDatabase = new Database('@products');


  useEffect(() => {
    GetDatabase('@products', setData);
    productDatabase.setDatabaseValue();
  }
    ,[]);



  const setData = (jsonValue) => {
    if (jsonValue!=null) {
          const data = JSON.parse(jsonValue)
          setProducts(data)
        } else {
          // this happens the first time the app is loaded
          // as there is nothing in storage...
          setProducts([])
        }
  }

  const debugView = (
    <View style={{flex:5}}>
      <Text style={{fontSize:32,color:'black',alignItems:'center'}}>
        Here is Debug log:
      </Text>
      <Text>
        Name: {name}
      </Text>
      <Text>
        Image: {image}
      </Text>
      <Text>
        Describe: {describe}
      </Text>
      <Text>
        Price: {price}
      </Text>
      <Text>
        products: {JSON.stringify(products)}
      </Text>
      <Text>
        {productDatabase.databaseName}: {productDatabase.getData()}
      </Text>
      <Text>
        productDatabase.log: {productDatabase.log}
      </Text>
    </View>
  );

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
            <Text> Product Name </Text>
            <Text style={{height: 30,width:400, margin:12, fontWeight: 'bold',  padding: 5}}>
              {name}
            </Text>
            <Image
              style={{width: 400, height: 400,}}
              source={{uri:image}}
            />
          </View>
          <View style={styles.vertical}>
            <Text> Descibe my products: </Text>
            <View style={{alignItems: 'center', height:400, margin: 10}}>
              <Text>
                {describe}
              </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Button
                color='red'
                title='Edit'
                onPress = {() => navigation.navigate({
                      name: 'NewEditScreen',
                      params: {
                        initName: name,
                        initDescribe: describe,
                        initImage:image,
                        initPrice: price
                      }
                })}
              />

              <Button
                color='red'
                title='Post'
                onPress = {() => {
                  const newProducts = products.concat({
                    'name': name,
                    'price': price,
                    'image': image,
                    'describe': describe,
                    'completed': new Date()
                  })
                  setProducts(newProducts)
                  StoreDatabase('@products', newProducts)
                    // navigation.navigate({
                    //   name: 'MainScreen',
                    //   params: {
                    //     initName: '',
                    //     initDescribe: '',
                    //     initImage: '',
                    //     initPrice: ''
                    //   }
                    // })
                }}
              />
            </View>
          </View>
        </View>
      </View>
      {debuging?debugView : <View></View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
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
    color:'yellow',
  },
  vertical: {
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',
    margin: 20,
  },
  horizontal: {
    flex:1,
    flexDirection:'row',
    alignItems: 'stretch',
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
    backgroundColor:'#fffff5',
  },
});

export default NewPreviewScreen;
