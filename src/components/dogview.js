import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  heading: {
    backgroundColor: '#E0F2F1',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300,
    paddingBottom: 10
  },
  dogname: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#004D40'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 3,
    color: '#656565'
  },
  photo: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  body: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default class DogView extends Component {

  render() {
    const user = this.props.user;

    return (
      <View style={styles.container}>
        <Image style={styles.image}
            source={{uri: user.picLink}} />
        <View style={styles.heading}>
          <Text style={styles.dogname}>{user.dogname}</Text>
          <View >
            <Text style={styles.title}>{`Breed: ${user.dogBreed}  Age: ${user.dogAge}`}</Text>
            <Text style={styles.title}>
              {`Location: ${user.loc}`}
            </Text>
            <Text style={styles.title}>
              {'Price: $15/day'}
            </Text>
          </View>
          <View style={styles.separator}/>
        </View>
        <View style={styles.body}>
        <Image source={{uri: user.profilepic}} style={styles.photo} />
        <View style={{flex: 1}}>
        <Text style={styles.description}>{`Owner: ${user.firstname} ${user.lastname}`}</Text>
        <Text style={styles.description} numberOfLines={1}>
           {`Email: ${user.emal}`}
        </Text>
        </View>
        </View>
      </View>
    );
  }
}

