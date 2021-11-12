import React, { useState } from 'react';
import { Text, View, TextInput, SafeAreaView, FlatList } from 'react-native';

const Qiuz4 = () => {
    const [githubId, setGithubId] = useState("");
    const [showReps, setShowReps] = useState(false);
    const [data, setData] = useState([{name:"NONE"}]);

    function ShowReps () {
        if (showReps){
            setData([{name:"NONE"}]);
        } else{
            fetch("https://api.github.com/users/" + githubId + '/repos')
                .then((response) => response.json())
                .then((data) => {
                    try{
                        data = data.slice(0,30);
                    } catch (e){
                        console.error(e);
                        data = [{name:"NONE"}];
                    }
                    setData(data)})
        }
        setShowReps(!showReps);
        
    }
    const renderItem = ({ item }) => {
        if (item.name == "NONE"){
            return(
                <View style={{alignItems:"flex-start", margin: 20 }}>
                    <Text style={{backgroundColor:"lightgray", padding:20, fontSize:24}}>
                        {item.name}
                    </Text>
                </View>
            )
        } else {
            return(
                <View style={{alignItems:"flex-start", margin: 20 }}>
                    <Text style={{backgroundColor:"lightgray", padding:20, fontSize:24, width:300}}>
                        {item.name}
                    </Text>
                </View>
            )
            
        }
    }
    const Reps = ({showReps}) => {
        return(
            <SafeAreaView>
                <Text style={{fontSize:20, color:"blue", marginHorizontal: 10}} onPress={() => {ShowReps()}}>
                    {showReps?"hide":"show"} repositories
                </Text>
                <FlatList
                    data={data}
                    style={{height:540}}
                    renderItem={renderItem}
                    keyExtractor={item =>item.name}
                />
            </SafeAreaView>
        )
    }

    return(
        <View style={{flex: 1, flexDirection: "column"}}>
            
            <View style={{flex: 3, alignItems: "center", justifyContent: "center", backgroundColor:"black"}}>
                <Text style={{fontSize: 40, marginVertical:20, color:"red"}}>
                    GitHub Viewer
                </Text>
            </View>
            <View style={{flex: 15}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize: 40}}>
                        github id:   
                    </Text>
                    <TextInput
                            style={{fontSize:40, height:50,width:500, marginHorizontal:10}}
                            onChangeText={text => setGithubId(text)}
                            value={githubId}
                            placeholder="userid"
                    />
                </View>
                <Reps showReps={showReps}/>
                
            </View>

            <View>
                <Text style={{fontSize:24}}>
                    DEBUGGING
                </Text>
                <Text style={{fontSize:24}}>
                    userld: {githubId}
                </Text>
                <Text style={{fontSize:24}}>
                    showReps: {String(showReps)}
                </Text>
                <Text style={{fontSize:24, marginHorizontal:5}}>
                     repos.length = {data.length}
                </Text>
            </View>
        </View>
        
    )
}

export default Qiuz4;