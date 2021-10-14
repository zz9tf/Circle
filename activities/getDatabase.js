import AsyncStorage from '@react-native-async-storage/async-storage';


const GetDatabase = async (databaseName, setData) => {
  const jsonValue = await AsyncStorage.getItem(databaseName)
  setData(jsonValue)
}

export default GetDatabase;
