import React, { Component } from 'react';
import { AppRegistry, Text, View,TouchableOpacity ,ScrollView} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import {Header}  from 'react-native-elements';


export default class PostScreen extends Component {

    render() {
      return (
        <ScrollView>
        <View style={styles.screen}>
        <Header
                placement="center"
                
                centerComponent={{ text: 'Post Advertise',  style: { color: '#fff', fontSize : 30, } }}
                
            /> 
          <View style={styles.container}>
                       
            <TextField
              value=''
              label='Enter Full Name :'              
            />
            <TextField
              value=''
              label='Enter Contact Number :'              
            />
            <TextField
              value=''
              label='Enter E-mail ID :'              
            />  
            <View>                    
              <Dropdown
                      label='locality'
                      data={locality}
              />
            </View>
            <View>                    
              <Dropdown
                      label='Type of People'
                      data={typeofpeople}
              />
            </View>
            <View>                    
              <Dropdown
                      label='Type of House'
                      data={typeofhouse}
              />
            </View>
            <View>                    
              <Dropdown
                      label='Furnished'
                      data={Furnished}
              />
            </View>
            <View>                    
              <Dropdown
                      label='Parking'
                      data={parking}
              />
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Dropdown
                  label='House Size'
                  data={housesize}
                />
              </View>

              <View style={{ width: 96, marginLeft: 8 }}>
                <Dropdown
                  label='Price'
                  data={price}
                />
              </View>
            </View>
          </View>

          <View style={[styles.container]}>
             <TouchableOpacity>
                <Text style={styles.button}> Submit </Text>
              </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      );
    }
}


const styles = {
  screen: {
    flex: 1,
    padding:0,
    paddingTop: 0,
    backgroundColor: '#FFFFFF',
  },

  container: {
    marginHorizontal: 4,
    marginVertical: 8,
    paddingHorizontal: 6,
   
  },

  text: {
    textAlign: 'center',
  },
  button:{
    
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
    fontWeight:'bold',
    marginHorizontal : 100
  },

  textContainer: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 16,
    elevation: 1,
    shadowRadius: 1,
    shadowOpacity: 0.3,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },

  },
};

const locality = [
  { value: 'Malwa Mill'},
  { value: 'Khajarana' },
  { value: 'Vijay Nagar' },
  { value: 'LIG' },
  { value: 'Rajwada' },
  { value: 'Annapurana' },
  { value: 'Palasia' },
];

const typeofpeople = [
  { value: 'Bachelor'},
  { value: 'Student' },
  { value: 'Couple' },
  { value: 'Family' },
  { value: 'Girls' },
  { value: 'Boys' },
];

const typeofhouse = [
  { value: 'Grounded'},
  { value: 'Appartment' },
  { value: 'Flat' },
  { value: 'Single Room' },
  { value: 'Single Room with Bathroom' },
];
const Furnished = [
    { value: 'Full-Furnished'},
    { value: 'Semi-Furnished' },
    { value: 'No-Furnished' },
  ];
const parking = [
  { value: 'Two-Wheeler'},
  { value: 'Four-Wheeler' },
  { value: 'Three-Wheeler' },
];

const housesize = [
  { value: '1BHK' },
  { value: '2BHK' },
  { value: '3BHK' },
];

const price = [
  { value: '1000', props: { disabled: true } },
  { value: '2000' },
  { value: '3000' },
  { value: '4000' },
];