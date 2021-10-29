import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Database {
   constructor(databaseName) {
    this.databaseName = databaseName;
    this.databaseValue = "Here is database";
    this.log = "";
  }

  setDatabaseValue = async() =>{
    const jsonValue = await AsyncStorage.getItem(this.databaseName);
    this.databaseValue = JSON.parse(jsonValue);
    this.log += "Set value...\n"
  }

  storeData(value){
    async (value) => {
      this.databaseValue = JSON.stringify(value)
      await AsyncStorage.setItem(this.databaseName, jsonValue)
        .then(() => {this.log + "\n" + this.databaseName+ ": stored data\n"})
    }
  }

  getData(){
    return this.databaseValue;
  }

  clearData(){
    async() => {
      AsyncStorage.removeItem(this.databaseName)
         .then(() => {this.log + "\n" + this.databaseName+ ": cleared data\n"})
    }
  }
}

const GetDatabase = async (databaseName) => {

}

export default Database;
