


import React, {Component} from 'react';
import {StyleSheet, View,Image,Text,TouchableOpacity,StatusBar} from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator,createBottomTabNavigator} from 'react-navigation';
import LoginScreen from './scr/screens/LoginScreen';
import SignupScreen from './scr/screens/SignupScreen';
import DashboardScreen from './scr/screens/DashboardScreen';
import HomeScreen from './scr/screens/HomeScreen';
import WishlistScreen from './scr/screens/WishlistScreen';
import ChatScreen from './scr/screens/ChatScreen';
import ProfileScreen from './scr/screens/ProfileScreen';
import { Icon } from 'react-native-elements';
import PostScreen  from './scr/screens/PostScreen';



 class Start extends Component{
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
          <TouchableOpacity onPress ={() => this.props.navigation.navigate('LoginScreen')}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => this.props.navigation.navigate('SignupScreen')}>
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => this.props.navigation.navigate('DashboardScreen')}>
              <Text style={styles.lineText}>or Login later</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const Tab =createBottomTabNavigator({
  Home : {
    screen : HomeScreen,
    navigationOptions :{
      tabBarLabel :'Home',
      tabBarIcon: ({ tintColor }) =>
              <Icon name="home" size={32} color={tintColor} />
    }
  },
  Wishlist : {
    screen : WishlistScreen,
    navigationOptions :{
      tabBarLabel : 'WishList',
      tabBarIcon: ({ tintColor }) =>
                <Icon type='font-awesome' name="heart"  size={25} color={tintColor} />

    }
  },
  Post :{
    screen : PostScreen,
    navigationOptions :{
      tabBarLabel : 'Post',
      tabBarIcon: ({ tintColor }) =>
                <Icon name="add" size={42} color={tintColor} />
    }
  },
  Chat : {
    screen : ChatScreen,
    navigationOptions :{
      tabBarLabel : 'Chat',
      tabBarIcon: ({ tintColor }) =>
                <Icon name="chat" size={28} color={tintColor} />
    }
  },
  Me :{
    screen : ProfileScreen,
    navigationOptions :{
      tabBarLabel : 'Me',
      tabBarIcon: ({ tintColor }) =>
                <Icon name="person" size={28} color={tintColor} />
    }
  }

});
  

const RootStack = createStackNavigator(
  {
    Start: {screen : Start},
    LoginScreen : {screen :LoginScreen},
    SignupScreen : {screen :SignupScreen},
    DashboardScreen : {screen : Tab},
  },
  {
    initialRouteName: 'Start',
    headerMode:'none'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
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
    marginBottom : 15,
  },
  
 
});