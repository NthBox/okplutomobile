import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './src/main';
import Welcome from './src/components/welcome';
import UserListView from './src/components/listview';

AppRegistry.registerComponent('okplutoCopy', () => Main);
