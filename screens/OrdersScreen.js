import React from 'react';
import Modal from 'react-native-modalbox';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
import { 
  Container, 
  Header, 
  Item, 
  Input, 
  Text, 
  List, 
  ListItem, 
  Content, 
  Left, 
  Right,
  Card,
  CardItem } from 'native-base';
import { Button, Icon } from 'react-native-elements';

var screen = Dimensions.get('window');
export default class OrdersScreen extends React.Component {
  static navigationOptions = {
    header:null,
  };

  constructor(props) {
    super(props);
    this.state = {
      selected1: "key0"
    };
  } 

  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }


  render() {
    return (
      <Container >
      	
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop:7,
    paddingBottom:10
  },
  headerViewStyle:{
    flex:1, 
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  view: {
    flexDirection:'row',
  },
});
