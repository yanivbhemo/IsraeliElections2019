import React , { Component } from 'react';
import { NavigatorIOS, Text, View, Image } from 'react-native';
import styles from '../static/Stylesheet'

export default class Header extends Component {
    render(){
        return(
            <View style={styles.header}>
                <Text style={styles.h1}>
                    <Image source={require('../assets/israel_icon.png')} style={{width:20,height:20}} />
                    Israeli Elections 2019
                </Text>
                <Text>Choose your winning party</Text>
            </View>
        )
    }
}