import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  TouchableHighlight } from 'react-native'
import {
  Container,
  Text,
  List,
  ListItem } from 'native-base'

const image = require('../../assets/images/whis.jpg')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 5
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    width: 75,
    height: 75
  },
  pro_name: {
    fontSize: 13,
    paddingLeft: 5
  },
  descrip: {
    fontSize: 12,
    paddingTop: 3,
    alignSelf: 'stretch',
    paddingLeft: 5
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 23,
    width: 110,
    backgroundColor: '#03a9f4',
    borderRadius: 10
  }
})

export default class OrdersScreen extends React.Component {
  static navigationOptions = {
    title: 'Women Care'
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <View>
              <List>
                <ListItem>
                  <View style={styles.view}>
                    <Image resizeMode = 'contain' style={styles.image} source={image} />
                    <View style={ styles.info }>
                      <View style={{ justifyContent: 'flex-start', paddingTop: 3 }}>
                        <Text style={styles.pro_name}>Whisper Ultra Nights Wings Sanitary Pads Pack of 2</Text>
                      </View>
                      <Text note style={styles.descrip}>packet of 5 pads</Text>
                      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingLeft: 5, paddingTop: 5 }}>
                        <Text style={{ flex: 1, fontSize: 14, color: '#4d4d4d', alignSelf: 'flex-end', paddingBottom: 2 }}>₹ 300</Text>
                        <TouchableHighlight onPress={() => navigate('EverydayScreen')} underlayColor='#dbdbdb'>
                          <View style={styles.button}>
                            <Text style={{ fontSize: 14, color: '#ffffff', fontWeight: 'bold' }}>ADD TO CART</Text>
                          </View>
                        </TouchableHighlight>
                      </View>
                    </View>
                  </View>
                </ListItem>
              </List>
            </View>
          </ScrollView>
        </View>
      </Container>
    )
  }
}
