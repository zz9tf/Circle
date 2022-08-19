import React, {useState, useEffect} from 'react'
import {useValue} from '../navigator/userInfProvider';
import Select from "react-select";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { text } from 'dom-helpers';

const UserInformationScreen = ({navigation}) => {
    const {user, setUser} = useValue();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [institution, setInstitution] = useState("");
    const [biography, setBiography] = useState("");
    
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    const userInfor = () => {
        if (user.login){
            setUserName(user.userName);
            setPassword(user.password);
            setGender(user.gender);
            setEmail(user.email);
            setPhoneNumber(user.phoneNumber);
            setInstitution(user.institution);
        }
    }

    useEffect(() => {
        userInfor();
    },[])

    return(
        <View style={{flexDirection: "column", justifyContent:"flex-end"}}>
            <View style={styles.backgroundWhiteBoard}>
                <View style={{flex:1, flexDirection:"row", justifyContent:"space-between",alignItems:"center", borderBottomWidth:1}}>
                    <Text style={styles.textStyle}>
                        Profile piture
                    </Text>
                    <TouchableOpacity
                        onPress={()=>{}}
                        >
                        <Image
                            style={{width: 50,height: 50, marginVertical:15, marginHorizontal:25, borderRadius:15}}
                            source={require("../images/myCircleIcon.png")}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.lineStyle}>
                    <Text style={styles.textStyle}>
                        Name:
                    </Text>
                    <TouchableOpacity
                        onPress={()=>{}}
                        >
                        <Text style={styles.textStyle}>
                            {userName}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lineStyle}>
                    <Text style={styles.textStyle}>
                        Gender:
                    </Text>
                    <TouchableOpacity
                        onPress={()=>{}}
                        >
                        <Text style={styles.textStyle}>
                            {gender}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lineStyle}>
                    <Text style={styles.textStyle}>
                        Password:
                    </Text>
                    <TouchableOpacity
                        onPress={()=>{}}
                        >
                        <Text style={styles.textStyle}>
                            {password}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.backgroundWhiteBoard}>
            <View style={styles.lineStyle}>
                <Text style={styles.textStyle}>
                        Email:
                    </Text>
                    <TouchableOpacity
                        onPress={()=>{}}
                        >
                        <Text style={styles.textStyle}>
                            {email}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lineStyle}>
                    <Text style={styles.textStyle}>
                        PhoneNumber:
                    </Text>
                    <TouchableOpacity
                        onPress={()=>{}}
                        >
                        <Text style={styles.textStyle}>
                            {phoneNumber}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lineStyle}>
                    <Text style={styles.textStyle}>
                        Institution:
                    </Text>
                    <TouchableOpacity
                        onPress={()=>{}}
                        >
                        <Text style={styles.textStyle}>
                            {institution}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.backgroundWhiteBoard}>
                <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <Text style={styles.textStyle}>
                        Biography:
                    </Text>
                    <TouchableOpacity
                        onPress={()=>{}}
                        >
                        <Text style={styles.textStyle}>
                            {biography}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {!user.login?
            <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:20, marginHorizontal:10}}>
                    Please 
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SignIn")}
                >
                    <Text style={{color:"green", fontSize:20}}>Sign in</Text>
                </TouchableOpacity>
                <Text style={{fontSize:20, marginHorizontal:10}}>
                    or
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={{color:"green", fontSize:20}}>Login</Text>
                </TouchableOpacity>
            </View>:
            <View>
                <TouchableOpacity
                    onPress={() => {
                        setUser({
                            ...user,
                            userName: "",
                            password: "",
                            gender: "",
                            email: "",
                            phoneNumber: "",
                            institution: "",
                            biography: "",
                            validated: false,
                            login: false})
                        navigation.goBack();
                    }}
                    style={{backgroundColor:"white", padding:8, alignItems:"center"}}
                >
                    <Text style={{color:"red", fontSize:28}}>log out</Text>
                </TouchableOpacity>
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundWhiteBoard:{
        flexDirection: "column",
        backgroundColor:"white",
        padding:8,
        marginVertical:5},
    lineStyle:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottomWidth:1
    },
    textStyle: {
        fontSize:32,
        marginHorizontal:10
    },
    button: {
        backgroundColor: "green",
        width: Dimensions.get("window").width*0.4,
        padding: 10,
        borderRadius: 20,
        alignItems:"center"
    },
});

export default UserInformationScreen;