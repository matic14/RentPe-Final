/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View,Image,Text,TouchableOpacity,StatusBar,TextInput} from 'react-native';
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyC0RilWmK6LvtyiR7-x3dFzeyWSuTmPeCY",
  authDomain: "rentpe-pr1998.firebaseapp.com",
  databaseURL: "https://rentpe-pr1998.firebaseio.com",
  projectId: "rentpe-pr1998",
  storageBucket: "rentpe-pr1998.appspot.com", 
};



export default class Login extends Component{
  constructor(props){
    super(props)

    this.state=({
      email : '' ,
      password :'' ,
    })
  }
signupUser =(email,password) =>{
 try{
  firebase.auth().createUserWithEmailAndPassword(email,password)
  
 }
 catch{
  console.log(error.toString());
  
 }
}
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#0060cb'
          barStyle='light-content'
        />
        <View style={styles.header}>
          <Text style={styles.headerText}>Signup</Text>
        </View>
        <View style={styles.loginDetail}>
          <TextInput style={styles.inputBox}
            placeholder='Email'
            placeholderTextColor = "#000000"
            selectionColor='#000000'
            keyboardType='email-address'
            onChangeText={(email) => this.setState({email})}
            
            
          />
          <TextInput style={styles.inputBox}
              placeholder='Password'
              secureTextEntry={true}
              placeholderTextColor = "#000000"
              onChangeText={(password) => this.setState({password})}
          />
        
        
            <TouchableOpacity onPress={() => this.signupUser(this.state.email,this.state.password)}>
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
            
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent:'space-around',
  },

  header:{
    flex :2,
    backgroundColor : '#FFFFFF',
    justifyContent:'center'
  
  },
  headerText:{
    fontSize : 50,
    fontWeight :'700',
    alignItems:'center',
    flexDirection:'row',
    marginLeft: 10,
    color:'#000000',
    
  },
  
  loginDetail:{
    flex :4,
    justifyContent: 'center',
    alignItems:'center',
  },
  inputBox:{
    width:300,
    backgroundColor: '#7abbff',
    borderRadius: 25,
    paddingHorizontal:18,
    borderColor : '#000000',
    fontSize: 16,
    color : '#000000',
    marginVertical: 10,
    borderColor :'#358cff'
  },
  buttonText:{
    width:150,
    height:50,
    textAlign:'center',
    backgroundColor:'#358cff',
    borderRadius:40,
    paddingHorizontal:10,
    paddingVertical:8,
    fontSize:20,
    color:'#FFFFFF',
    marginVertical:20,
    marginBottom:10,
    marginTop:40,
    fontWeight:'bold'
  },
  
 
});
