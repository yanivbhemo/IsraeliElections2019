import React, { Component } from 'react'
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native'

const styles = StyleSheet.create({
    imageCard: {
        width: '50%',
        margin: '1%',
        aspectRatio: 1,
        borderRadius: 20
    }
})

export default class Party extends Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
            <TouchableOpacity
            style={this.props.voteDisabled == 'true' ? { opacity: 0.5 } : null}
            disabled={this.props.voteDisabled == 'false' ? false : true}
            >
                <Image style={styles.imageCard} source={this.props.img} />
            </TouchableOpacity>
        )
    }
}