import React , { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import styles from './static/Stylesheet'
import Header from './components/Header'
import PartiesList from './components/PartiesList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <PartiesList />
        <View> 
        </View>
      </View>
    );
  }
}



