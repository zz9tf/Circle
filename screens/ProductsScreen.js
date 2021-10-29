import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import GetDatabase from "../activities/getDatabase.js"

// const App = () => {...}
const ProductsScreen = () => {

  const databaseName = '@products'

  useEffect(() => {GetDatabase(databaseName, getData)}
            ,[])

  const getData = () => {

  }
  return (
    <View style={styles.container}>
    <View style={{flex: 1, alignItems:'center'}}>
        <Text style={styles.headerText}>
            What news?
        </Text>
    </View>
    <Text style={{borderBottomColor: "black", borderBottomWidth: StyleSheet.hairlineWidth}}> </Text>
      <View style={{flex:10, flexDirection: 'column'}}>
         <Text>
          // 1
         </Text>
         
          <View style={styles.productBox}>
            <View style={styles.productBox}>
            
            <Text>
              //1a content
            </Text>
            </View>
            <View style={styles.productBox}>
            <Text>
              //1b content
            </Text>
            
            </View>
          </View>
        <Text style={{borderBottomColor: "black", borderBottomWidth: StyleSheet.hairlineWidth}}> </Text>
          <Text>
          // 2
          </Text>
        <View style={styles.productBox}>
          <View style={styles.productBox}>
            <Image
              style={{width: '50%', resizeMode:'contain'}}
              source={{uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'}}
            />
            <Text> aaa </Text>
          </View>

          <View style={styles.productBox}>
            <Image
              style={{width: '50%', resizeMode:'contain'}}
              source={{uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'}}
            />
            <Text> aaa </Text>
          </View>
        </View>
        <Text style={{borderBottomColor: "black", borderBottomWidth: StyleSheet.hairlineWidth}}> </Text>
          <Text>
          // 3
         </Text>
        <View style={styles.productBox}>
          <View style={styles.productBox}>
            <Text>
              // 3a
            </Text>
          </View>
          <View style={styles.productBox}>
            <Text>
              // 3b
            </Text>
          </View>
        </View>

        <Text style={{borderBottomColor: "black", borderBottomWidth: StyleSheet.hairlineWidth}}> </Text>
          <Text>
            // 4
          </Text>
        <View style={styles.productBox}>
          <View style={styles.productBox}>
          <Text>
            // 4a
          </Text>
            
          </View>
          <View style={styles.productBox}>
          <Text>
            // 4b
          </Text>
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
  },
  headerText: {
    flex:1,
    alignItems:'center',
    fontSize:64,
    padding:1,
    color:"red"
  },
  vertical: {
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',
    backgroundColor:'green',
  },
  horizontal: {
    flex:1,
    flexDirection:'row',
    alignItems: 'stretch',
    backgroundColor:'pink',
  },
  input: {
    color: 'black',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  productBox: {
    flexDirection: 'row',
    flex:2,
    margin: 5
  }
});


export default ProductsScreen;
