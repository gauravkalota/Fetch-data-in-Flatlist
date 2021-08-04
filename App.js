import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';
export default class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      calls: [
        { id: 1, name: "Anthony", status: "active", image: "https://image.flaticon.com/icons/png/512/2922/2922506.png" },
        { id: 2, name: "Travis", status: "active", image: "https://img-premium.flaticon.com/png/512/3220/premium/3220365.png?token=exp=1628066885~hmac=8cdafa86ba07cc9ce647f339c1543b72" },
        { id: 3, name: "Emily", status: "active", image: "https://image.flaticon.com/icons/png/512/2922/2922561.png" },
        { id: 4, name: "Kevin", status: "offline", image: "https://image.flaticon.com/icons/png/512/2922/2922510.png" },
        { id: 5, name: "Ed", status: "active", image: "https://img-premium.flaticon.com/png/512/3220/premium/3220404.png?token=exp=1628066893~hmac=a2b248ac3042ed679ba8491240e350b1" },
        { id: 6, name: "Patrick", status: "active", image: "https://img-premium.flaticon.com/png/512/2813/premium/2813832.png?token=exp=1628066895~hmac=dcedf91ac891ffd0707b7e995662dde0" },
        { id: 8, name: "Stella", status: "offline", image: "https://img-premium.flaticon.com/png/512/3220/premium/3220429.png?token=exp=1628066897~hmac=a7e267db0525f44e0df2da9b1e452029" },
        { id: 9, name: "Ethan", status: "active", image: "https://image.flaticon.com/icons/png/512/2922/2922688.png" },
        { id: 10, name: "Olivia", status: "active", image: "https://image.flaticon.com/icons/png/512/2922/2922558.png" },
        { id: 11, name: "Alexander AAAAAAAAA", status: "offline", image: "https://img-premium.flaticon.com/png/512/3220/premium/3220451.png?token=exp=1628066904~hmac=eb6d40073c1404142947261c7df9a067" },
        { id: 12, name: "Luna", status: "active", image: "https://image.flaticon.com/icons/png/512/554/554857.png" },
        { id: 13, name: "Ava", status: "active", image: "https://image.flaticon.com/icons/png/512/5300/5300907.png" },
        { id: 14, name: "Samuel BBBBBBBBBB", status: "offline", image: "https://image.flaticon.com/icons/png/512/5300/5300703.png" },
        { id: 15, name: "Logan", status: "active", image: "https://image.flaticon.com/icons/png/512/5302/5302057.png" },
        { id: 16, name: "Oliver", status: "active", image: "https://image.flaticon.com/icons/png/512/5300/5300643.png" },
        { id: 17, name: "Lily", status: "offline", image: "https://image.flaticon.com/icons/png/512/5300/5300980.png" },
        { id: 18, name: "Scarlett", status: "offline", image: "https://image.flaticon.com/icons/png/512/5301/5301028.png" },

      ]
    };
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <SafeAreaView style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
              <Text style={styles.mblTxt}>Call</Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.status}</Text>
            </View>
          </View>
        </SafeAreaView>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }} >
        <FlatList
          extraData={this.state}
          data={this.state.calls}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});