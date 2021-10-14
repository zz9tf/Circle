import AsyncStorage from '@react-native-async-storage/async-storage';

const StoreDatabase = async (databaseName, value) => {
  const jsonValue = JSON.stringify(value)
  await AsyncStorage.setItem(databaseName, jsonValue)
}

export default StoreDatabase;
