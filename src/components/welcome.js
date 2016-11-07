import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import UserListView from './listview'

export default class Welcome extends Component {



  constructor(props, context) {

    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    this.props.navigator.push({
      title: 'Dog List',
      component: UserListView
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.container1}>
      <View >
        <Text style={styles.title}>
          OkPluto
        </Text>
        <Text style={styles.welcome}>
          Woof! Woof! Rent a dog today
        </Text>
      </View>
      <TouchableHighlight
          onPress={this._onForward}
          style={styles.button}
          underlayColor='#004D40'>
        <Text style={styles.buttonText}>Check out some dogs</Text>
      </TouchableHighlight>
      <Image source={require('../assets/dog.png')} style={styles.image} />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    padding: 30,
    marginTop: 85,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    backgroundColor: '#00796B'
  },
  title: {
    fontSize: 75,
    textAlign: 'center',
    margin: 10,
    color: '#E0F2F1'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#E0F2F1'
  },
  instructions: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  buttonText: {
    fontSize: 18,
    color: '#004D40',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    // flex: 2,
    flexDirection: 'row',
    backgroundColor: '#E0F2F1',
    borderColor: '#004D40',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 20,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  image: {
    width: 217,
    height: 200,
    marginTop: 30
  }
});