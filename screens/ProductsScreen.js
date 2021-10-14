import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import GetDatabase from "../activities/getDatabase.js"

// const App = () => {...}
const ProductsScreen = () => {

  const [databaseName, setDatabaseName] = useState('@products')

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
         // 1
          <View style={styles.productBox}>
            <View style={styles.productBox}>
            //1a content

            </View>
            <View style={styles.productBox}>
            //1b content
            </View>
          </View>
        <Text style={{borderBottomColor: "black", borderBottomWidth: StyleSheet.hairlineWidth}}> </Text>
        // 2
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
        // 3
        <View style={styles.productBox}>
          <View style={styles.productBox}>
            // 3a
          </View>
          <View style={styles.productBox}>
            // 3b
          </View>
        </View>

        <Text style={{borderBottomColor: "black", borderBottomWidth: StyleSheet.hairlineWidth}}> </Text>
        // 4
        <View style={styles.productBox}>
          <View style={styles.productBox}>
            // 4a
          </View>
          <View style={styles.productBox}>
            // 4b
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
    justifyContent: 'stretch',
    backgroundColor:'green',
  },
  horizontal: {
    flex:1,
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'stretch',
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
