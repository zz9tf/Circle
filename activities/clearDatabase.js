import AsyncStorage from '@react-native-async-storage/async-storage';

const ClearDatabase = (databaseName) => {
        try {
          console.log('clearData: ' + databaseName)
          AsyncStorage.removeItem(databaseName)
             .then(() => {console.log('cleared the data')})
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
}

export default ClearDatabase;
