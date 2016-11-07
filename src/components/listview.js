import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text, Image, StatusBar, TouchableHighlight } from 'react-native';
// import Row from './listrow';
import Api from '../api';
import DogView from './dogview';
import GiftedSpinner from 'react-native-gifted-spinner';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  rowContainer: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_item: {
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header_text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: '#004D40',
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  body: {
    flex: 9,
    backgroundColor: '#E0F2F1'
  },
  text: {
    fontSize: 20,
    color: '#656565'
  },
  textContainer: {
    flex: 1
  },
  photo: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#004D40'
  },
});

export default class UserListView extends Component {

  constructor(props) {
    super(props);
    this._rowView = this._rowView.bind(this);
    this.rowPressed = this.rowPressed.bind(this);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      title: 'Available Dogs',
      dataSource: ds,
      userList: {},
      loaded: false
    };
  }

  componentDidMount() {
    const that = this;
    Api()
      .then(users => {
        // console.log('users: ', users);
        const ds = that.state.dataSource.cloneWithRows(users);
        that.setState({
          dataSource: ds,
          loaded: true
        })
      })
  }

  rowPressed(user) {
    this.props.navigator.push({
      title: user.dogname,
      component: DogView,
      passProps: {user: user}
    });
  }

  _rowView(user) {
    return (
        <TouchableHighlight onPress={() => this.rowPressed(user)}
                            underlayColor='#dddddd' >
          <View>
            <View style={styles.rowContainer}>
              <Image source={{uri: user.picLink}} style={styles.photo} />
              <View style={styles.textContainer}>
              <Text style={styles.name}>
                 {`${user.dogname}` }
              </Text>
              <Text style={styles.text} numberOfLines={1}>
                 {`${user.dogAge} years old / ${user.loc}`}
              </Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
          )
  }

  render() {

    return  (
      <View style={{flex: 1, paddingTop: 60}}>

        <View style={styles.body}>
          { this.state.loaded ?
            (
              <ListView
              dataSource={this.state.dataSource}
              renderRow={this._rowView}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />) :
            (
            <GiftedSpinner />
            )
          }
       </View>
      </View>
    )
  }
}




        // { this.state.loaded &&
        //   <ListView
        //     style={styles.container}
        //     dataSource={this.state.userList}
        //     renderRow={(data) => <Row {...data} />}
        //     renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        //   />
        // }

