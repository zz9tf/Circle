import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList} from 'react-native';
import { TextInput } from "react-native-gesture-handler";


const BBViewer = () => {
  const appURL = 'https://glacial-hamlet-05511.herokuapp.com';
  
  const [bb, setBB] = useState();
  const [isShow, setIsShow] = useState(false);
  const [posts, setPosts] = useState();
  const [bboardNames, setBBoardNames] = useState([])
  const [bbsLenth, setBBsLenth] = useState()

  const getBBoardNames = async () => {
    let result = {data:[]}
    result = await Axios.get(
        appURL+"/bboardNames"
    )
    setBBsLenth(result.data.length)
    setBBoardNames(result.data)
  }
  const getPosts = async () => {
    let result = {data:[]}
    result =
        await Axios.post(
            appURL+"/posts",
            {bboard:bb}
        )
    if (result.data.length > 0){
        setPosts(result.data)
    } else{
        setPosts()  
    }
    
  }
  const onPressActicity = (bb) => {
    setBB(bb)
  }

  const buttonRender = (item) => (
    <TouchableOpacity
        style={{
            backgroundColor:"black",
            margin:5
        }}
        onPress={() =>{
            onPressActicity(item.item);
            setIsShow(true);
        }}
    >
        <Text style={{color:"red", fontSize: 20, padding:10}}>
            {item.item}
        </Text>
    </TouchableOpacity>
  )

  const bboardRender = ({item}) => (
    <View style = {{backgroundColor:"lightgray", padding:20, marginVertical:20}}>
        <Text style={{color:"black", fontSize: 28}}>
            {item.title}
        </Text>
        <Text style={{color:"black", fontSize: 15}}>
            {item.text}
        </Text>
    </View>
  )
  
  useEffect(() => {
    getBBoardNames();
    getPosts();
  },[bb])

  return (
    <View style={{flexDirection: "column", flex:1}}>
        <View style={{flex:7}}>
            <View style={{backgroundColor:"black", alignItems:"center"}}>
                <Text style={{color:"red", fontSize:46, marginVertical:30}}>
                    BBViewer
                </Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity
                    style={{
                        backgroundColor:"blue",
                        justifyContent:"center"
                    }}
                    onPress={()=>{
                        onPressActicity();
                        setIsShow(false);
                    }}
                >
                    <Text style={{color:"white", fontSize: 15, padding:5}}>
                        REFRESH BBOARDS
                    </Text>
                </TouchableOpacity>
                <FlatList
                data={bboardNames}
                renderItem={buttonRender}
                keyExtractor={item =>  item.item}
                horizontal={true}
                />
            </View>
            <View style={{flexDirection:"row"}}>
                <View>
                    <Text style={{fontSize:32}}>
                        Selected bboard:
                    </Text>
                </View>
                {bb==null?
                <View></View>:
                <View style={{backgroundColor:"black", margin:5}}>
                    <Text style={{color:"red", fontSize: 20, padding:10}}>
                        {bb}
                    </Text>
                </View>}
                

                
            </View>
            <View style={{height:"60%"}}>
                <View style={{alignItems:"flex-start", margin:10}}>
                    <FlatList
                    data={posts}
                    renderItem={bboardRender}
                    keyExtractor={item => item._id}
                    />
                </View>
                
            </View>

        </View>
        <View style={{flex:3}}>
                <Text style={{fontSize:32}}>
                    DEBUGGING
                </Text>
                <Text style={{fontSize:20}}>
                    bb: {bb}
                </Text>
                <Text style={{fontSize:20}}>
                    show: {isShow.toString()}
                </Text>
                <Text style={{fontSize:20}}>
                    bbs.length: {bbsLenth}
                </Text>
                <Text style={{fontSize:20}}>
                    posts= {JSON.stringify(posts)}
                </Text>
        </View>
    </View>
  )
}

export default BBViewer;
