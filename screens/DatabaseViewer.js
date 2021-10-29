import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput
   ,FlatList, SafeAreaView, TouchableOpacity  } from 'react-native';
import GetDatabase from '../activities/getDatabase.js'
import StoreDatabase from '../activities/storeDatabase.js'
import ClearDatabase from '../activities/clearDatabase.js'
import Database from '../databases/database.js'

export default function DatabaseViewer() {
  const databaseName = '@products';
  const [databaseValue, setDatabaseValue] = useState();

  useEffect(() => {
    GetDatabase(databaseName, setData);
  }
    ,[]);

  const setData = (jsonValue) => {
    if (jsonValue!=null) {
      setDatabaseValue(JSON.parse(jsonValue))
    } else {
      setDatabaseValue([])
    }
  }

  const renderProduct = ({ item }) => {
    return (
      <View style={{
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
      }}>
        <TouchableOpacity onPress={()=>{}} style={{}}>
          <Text> Name: {item.name} Price: {item.price}</Text>
          <View style={{flexDirection:"row", justifyContent:"stretch"}}>
            <Image
            style={{width: 400, height: 400, marginHorizontal:20}}
              source={{uri: item.image}}
            />
            <Text>
             Descibe: {item.describe}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{flex:1, flexDirection:'column'}}>
      <View style={{flexDirection:'row', backgroundColor:'green', justifyContent:'space-around', alignItems:'center'}}>
        <Text style={{fontSize:32, color: 'white'}}>
          Database: {databaseName}
        </Text>
        <Button
          title = 'clearDatabase'
          color = 'blue'
          onPress={() => {
            ClearDatabase(databaseName)
            GetDatabase(databaseName, setData)
        }}
        />
      </View>
      <SafeAreaView style={{flex: 1, backgroundColor:'lightgreen'}}>
        <Text style={{fontSize:16, color: 'black'}}>
          Database: {JSON.stringify(databaseValue)}
        </Text>
        <FlatList
          data={databaseValue}
          renderItem={renderProduct}
          keyExtractor={item => item.completed}
        />

      </SafeAreaView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  headerText: {
    flex:1,
    alignItems:'center',
    fontSize:64,
    padding:25,
    color:'white',
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
