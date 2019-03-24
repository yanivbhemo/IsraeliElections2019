import React , { Component } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator, Text, View, Image } from 'react-native';
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
  } from 'react-native-popup-dialog';
import Party from './Party'

const styles = StyleSheet.create({
    container: {
      width: '50%',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    middle:{
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 10,
    }
  })

const partiesImages = [
    require('../assets/parties_icons/likud.jpeg'),
    require('../assets/parties_icons/avoda.png'),
    require('../assets/parties_icons/kahollavan.png'),
    require('../assets/parties_icons/merez1.jpg'),
    require('../assets/parties_icons/kulanu.png'),
    require('../assets/parties_icons/yaminhadash.jpg'),
    require('../assets/parties_icons/israelbeitenu.png'),
    require('../assets/parties_icons/shas.png'),
    require('../assets/parties_icons/torahjudaism.jpg'),
    require('../assets/parties_icons/raamtaal.jpg'),
    require('../assets/parties_icons/balad.jpg'),
    require('../assets/parties_icons/zehut.png'),
    require('../assets/parties_icons/gesher.png'),
    require('../assets/parties_icons/ihud.png'),
    require('../assets/parties_icons/magen.jpeg')
  ]
  
export default class PartiesList extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            partyArr: [],
            loading: true,
            error: null,
            disableVoting: false,
        }
    }

    componentDidMount(){
        return fetch('https://isr-elections.herokuapp.com/api/parties', {method: 'GET'})
        .then((response) => response.json())
        .then((data) => {
            const parties = []
            let index = 0
            data.parties.map(item => {
                const partyObj = { id: item.id, img: partiesImages[index++]}
                parties.push(partyObj)
            })
            this.setState({
                partyArr: parties,
                loading: false,
            })
        })
        .catch((error) => {
            this.setState({error, loading: false})
          });
    }

    renderParty(party, index) {
        return(
            <Party
                key={index}
                id={party.id}
                img={party.img}
                voteDisabled='false'
            />
        )
    }

    render() {
        const { partyArr, loading } = this.state;
        if(!loading) {
            return (
                <ScrollView style={styles.middle}>
                    <Dialog visible={false}>
                    <DialogContent
                        style={{
                        backgroundColor: '#F7F7F8',
                        }}
                    >
                        <Text>{partiesImages[3]}</Text>
                    </DialogContent>
                    </Dialog>
                    <View style={styles.container}>
                    {
                        partyArr.map(this.renderParty)
                    }
                    </View>
                </ScrollView>
            );
        } else {
            return <ActivityIndicator size="large" color="skyblue" />
        }
    }
}