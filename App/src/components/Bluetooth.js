import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Switch,
  TouchableOpacity
} from 'react-native';
 
import BluetoothSerial from 'react-native-bluetooth-serial'

export default class Bluetooth extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEnabled: false,
      discovering: false,
      devices: [],
      unpairedDevices: [],
      connected: false,
    }
  }

  componentDidMount() {
 
    Promise.all([
      BluetoothSerial.isEnabled(),
      BluetoothSerial.list()
    ])
    .then((values) => {
      const [ isEnabled, devices ] = values
 
      this.setState({ isEnabled, devices })
    })
 
    BluetoothSerial.on('bluetoothEnabled', () => {
 
      Promise.all([
        BluetoothSerial.isEnabled(),
        BluetoothSerial.list()
      ])
      .then((values) => {
        const [ isEnabled, devices ] = values
        this.setState({  devices })
      })
 
      BluetoothSerial.on('bluetoothDisabled', () => {
 
         this.setState({ devices: [] })
 
      })
      BluetoothSerial.on('error', (err) => console.log(`Error: ${err.message}`))
 
    })
 
  }

  connect (device) {
    this.setState({ connecting: true })
    BluetoothSerial.connect(device.id)
    .then((res) => {
      alert(`Connecté à ${device.name}`);
      this.props.navigation.navigate('Programmer');
    })
    .catch((err) => alert((err.message)))
  }

  _renderItem(item) {
 
    return(
        <TouchableOpacity
        onPress={() => this.connect(item.item)}
        >
            <View style={styles.deviceNameWrap}>
                <Text style={styles.deviceName}>{ item.item.name }</Text>
            </View>
        </TouchableOpacity>
    );
  }
 
  toggleBluetooth (value) {
    if (value === true) {
      this.enable()
    } else {
      this.disable()
    }
  }

  render() {

    return (
      <View style={ styles.container }>
        <View style={ styles.toolbar }>
            <Text style={styles.toolbarTitle } color='red'>Liste des appareils avec bluetooth</Text>
            { this.state.isEnabled === false ?
                <Text style={ styles.toolbarTitle } color='red'>Bluetooth éteint</Text>
                :
                <Text style={ styles.toolbarTitle } color='blue'>Appareils détectés</Text>
            }
        </View>
        <FlatList
          style={{ 
              flex:1,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'black',
              margin: 4,
            }}
          data={ this.state.devices }
          keyExtractor={ item => item.id }
          renderItem={ (item) => this._renderItem(item) }
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({

    touchable: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },

  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  toolbar:{
    paddingTop:30,
    paddingBottom:30,
    flexDirection:'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    margin: 4,
  },
  toolbarButton:{
    width: 50,
    marginTop: 8,
  },
  toolbarTitle:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize: 20,
    flex:1,
    marginTop:6,
  },
  deviceName: {
    fontSize: 17,
    color: "black"
  },
  deviceNameWrap: {
    margin: 10,
    borderBottomWidth:1
  }
});