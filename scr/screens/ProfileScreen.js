import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import PostScreen  from './PostScreen';

export default class ProfileScreen extends Component {

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('../Images/mypic.png')}/>
          <View style={styles.body}>
            
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Prashant</Text>
              <Text style={styles.info}>RentPe User</Text>
              <Text style={styles.description}>Letting You Live Better</Text>
              
              <TouchableOpacity style={styles.buttonContainer} onPress ={() => this.props.navigation.navigate('PostScreen')} >
                <Text>Post Advertisement</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>View Your Post</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>View Your Landlord/Tenants</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Edit Your Profile</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Change Password</Text> 
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Logout</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name : {
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});