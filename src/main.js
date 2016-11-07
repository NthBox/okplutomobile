import React, { Component } from 'react';
import {
  Navigator,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Welcome from './components/welcome';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004D40'
  }
});

var ROUTES = {
  welcome: Welcome
};

export default class Main extends Component {

  renderScene(route, navigator) {
    var Component = ROUTES[route.name];
    return <Welcome route={route} navigator={navigator} />;
  }

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: '',
          index: 0,
          component: Welcome
        }}/>
    );
  }
}