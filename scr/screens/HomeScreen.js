import React, {Component} from 'react';
import { Text , AppRegistry, View,StyleSheet,FlatList,Image , TouchableOpacity} from 'react-native';
import flatlistdata from '../data/flatlistData';
import { SearchBar ,Header } from 'react-native-elements';

class FlatListItem extends Component{
  render(){
    return(
      <View style={{ flex : 1 ,flexDirection : 'column' }}>
        <View style ={{
          flex :1,
          flexDirection : 'row',
          backgroundColor : '#7abbff'
          }}>
          <Image 
            source ={{uri : this.props.item.imageURL}}
            style={{width: 120 ,height:120 ,margin:5}}>
          </Image>
          <View style={{flex: 1 ,flexDirection :'column'}}>
            <Text style ={styles.FlatListItemPrice}>{this.props.item.price}</Text>
            <Text style ={styles.FlatListItem}>{this.props.item.bhk}</Text>
            <Text style ={styles.FlatListItem}>{this.props.item.location}</Text>
            <Text style ={styles.FlatListItem}>{this.props.item.furnished}</Text>
          </View>
        </View>
        <View style ={{height:1, backgroundColor:'white'}}>

        </View>
      </View>
     
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex :1,
    backgroundColor : 'white'
  },
  header:{
    flex : 1,
    backgroundColor : 'blue',
  },
  FlatListItem : {
    color : "white",
    padding : 3 ,
    fontSize : 16,
  },
  FlatListItemPrice :{
    fontSize :18,
    fontWeight : 'bold',
    color : 'white'
  }
});

export default class HomeScreen extends React.Component {
  state = {
    search: '',
  };
  updateSearch = search => {
    this.setState({ search });
  };
  
  render(){
    const { search } = this.state;
    return (
        <View style={styles.container}>
         
          
          
         
         <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          />
         
         <View> 
            <FlatList 
             data={flatlistdata}
              renderItem={({item, index})=>{
               return(<FlatListItem item ={item} index={index}>

              </FlatListItem>);
              }}
              >

            </FlatList>
          </View>
        </View>
      );
    }
  }
  
  

