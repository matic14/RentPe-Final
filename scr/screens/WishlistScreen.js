import React from 'react';
import { Text, View } from 'react-native';
import {Header}  from 'react-native-elements';

export default class WishlistScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, }}>
          <Header
                placement="center"
                centerComponent={{ text: 'WishList',  style: { color: '#fff', fontSize : 35, fontWeight:'400' } }}
                
            /> 
          <Text style ={{flex : 1 ,fontSize:25 , fontWeight : '200' , alignContent : 'center' ,justifyContent:'center' ,textAlign :'center' , paddingVertical
          : 200}}>No WishList Yet!</Text>
        </View>
      );
    }
  }