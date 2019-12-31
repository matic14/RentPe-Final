import React, {Component} from 'react';
import {StyleSheet, View,Image,Text,TouchableOpacity,StatusBar} from 'react-native';


export default class Signup extends Component{
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#0060cb'
          barStyle='light-content'
        />
         <View style={styles.logo}>
            <Image
              source={require('./scr/Images/house.png')}
              style={{ width:160 , height: 160 }}
            />
              <Text style={{color:'#000000',fontSize:3,fontWeight
              :'600',textAlign:'center',marginTop:10}}>RentPe</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.lineText}>or Login later</Text>
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
  logo: {
    flexDirection: 'column',
    flex : 1,
    justifyContent:'center',
    alignContent:'center',
    marginTop:20,
  },
  buttonText:{
    
    width:180,
    height:40,
    textAlign:'center',
    backgroundColor:'#358cff',
    borderRadius:40,
    paddingHorizontal:10,
    paddingVertical:5,
    fontSize:20,
    color:'#FFFFFF',
    marginVertical:20,
    marginBottom:10,
    marginTop:20,
    fontWeight:'bold'
  },
  lineText:{
    fontSize:15,
    textAlign:'center',
    color:'#000000',
    fontWeight:'400',
    marginTop:10,
    marginBottom:12,

  }
  
 
});
import React, {Component} from 'react';
import {StyleSheet, View,Image,Text,TouchableOpacity,StatusBar} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './scr/screens/Login';
import Signup from './scr/screens/Signup';

export default class Start extends Component{
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#0060cb'
          barStyle='light-content'
        />
         <View style={styles.logo}>
            <Image
              source={require('./scr/Images/house.png')}
              style={{ width:200 , height: 200 }}
            />
              <Text style={{color:'#000000',fontSize:40,fontWeight
              :'600',textAlign:'center',marginTop:15}}>RentPe</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.lineText}>or Login later</Text>
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
  logo: {
    flexDirection: 'column',
    flex : 1,
    justifyContent:'center',
    alignContent:'center',
    marginTop:20,
  },
  buttonText:{
    
    width:180,
    height:40,
    textAlign:'center',
    backgroundColor:'#358cff',
    borderRadius:40,
    paddingHorizontal:10,
    paddingVertical:5,
    fontSize:20,
    color:'#FFFFFF',
    marginVertical:20,
    marginBottom:10,
    marginTop:20,
    fontWeight:'bold'
  },
  lineText:{
    fontSize:15,
    textAlign:'center',
    color:'#000000',
    fontWeight:'400',
    marginTop:10,
    marginBottom:12,

  }
  
 
});