/**
 * Draggable items to code your own
 * 
 * @author Ltabis
 * @date 02/03/2020
 */

import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native';

import ViewStyles from './styles/view'
import { FlatList } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons'
import BluetoothSerial from 'react-native-bluetooth-serial'

// All possible instructions.
var InstructionsData = [

  {
    name: 'Avant',
    icon: 'md-arrow-up',
    description: 'La voiture avance',
    id: 0,
    val: 'f',
  },
  {
    name: 'Arrière',
    icon: 'md-arrow-down',
    description: 'La voiture recule',
    id: 0,
    val: 'b',
  },
  {
    name: 'Gauche',
    icon: 'md-arrow-back',
    description: 'La voiture tourne à gauche',
    id: 0,
    val: 'l',
  },
  {
    name: 'Droite',
    icon: 'md-arrow-forward',
    description: 'La voiture tourne à droite',
    id: 0,
    val: 'r',
  },
  {
    name: 'Stop',
    icon: 'md-alert',
    description: 'La voiture s\'arrète',
    id: 0,
    val: '',
  },

];

class HorizontalFlatListInstrutionsItem extends Component {

  constructor(props) {
    super(props);

    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem() {
    this.props.del(this.props.item.id);
  }

  render() {
    return (
      <View style={ ViewStyles.programitem }>
        <Icon name={ this.props.item.icon }
              size={ 100 }
              color='black'/>
        <Text style={{ fontSize: 20 }}>
          { this.props.item.name }
        </Text>
        { this.props.item.id != 0 &&
          <View style={{
            flex: 1,
            justifyContent: 'flex-end',
            margin: 10}}
          >
            <Button title='Supprimer'
                    color='red'
                    onPress={ this.deleteItem }/>
          </View>
          }
      </View>
    );
  }
}

class HorizontalFlatListInstrutions extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.getData(),
    };
  }

  static componentDidUpdate(nextProps, preProps) {
    return { data: nextProps.value };
  }

  render () {
    return (
      <View style={ ViewStyles.program }>
        <FlatList
          horizontal={ true }
          data={ this.props.getData() }
          renderItem={({ item }) => {
              return (
                <HorizontalFlatListInstrutionsItem item={ item } del={ this.props.del }/>
              );
            }
          }
          keyExtractor={ ( item ) => item.id.toString() }
          >
        </FlatList>
      </View>
    );
  }
}

class HorizontalFlatListItem extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={ ViewStyles.flatlistitem }>
        <TouchableOpacity onPress={ () => {
          this.props.method(
              {
                name: this.props.item.name,
                icon: this.props.item.icon,
                description: this.props.item.description,
                id: this.props.item.id,
                val: this.props.item.val,
              }
          )
        }}
        style={ ViewStyles.touchable }/>
        <Text style={ ViewStyles.itemtext }>
          { this.props.item.name }
        </Text>
        <Icon name={ this.props.item.icon }
              size={ 20 }
              color='white'/>
        <Text style={ ViewStyles.itemtext }>
          {this.props.item.description}
        </Text>
      </View>
    );
  }
}

class HorizontalFlatList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ ViewStyles.instructions }>
        <Text>
          Instructions
        </Text>
        <View style={{ height: 80 }}>
          <FlatList
            horizontal={ true }
            data={ InstructionsData }
            renderItem={({ item, index }) => {
              return (
                <HorizontalFlatListItem item={ item } index={ index } method={ this.props.method }/>
              );
            }}
            keyExtractor={ (item) => item.name }
          >
          </FlatList>
        </View>
      </View>
    );
  }
}

class IDE extends Component {

  constructor(props) {
    super(props);
    this.state = {
      instructions: [
        {
          name: 'Start',
          icon: 'md-play-circle',
          description: 'La voiture démarre',
          id: 0,
          val: '',
        },
      ],
      id: 1,
      navigation: this.props.navigation,
    }   

    this.addInstruction = this.addInstruction.bind(this);
    this.delInstruction = this.delInstruction.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.getData = this.getData.bind(this);
    this.launch = this.launch.bind(this);
  }

  launch() {
    for (const index in this.state.instructions) {
      this.sendMessage(this.state.instructions[index].val);    
    }
  }

  sendMessage(message) {
    if (message === undefined)
      return;
    BluetoothSerial.write(message)
    .then((res) => {
      this.setState({ connected: true })
    })
    .catch((err) => console.log(err.message))
  }

  addInstruction(newInstruction) {
    this.setState(state => {
      newInstruction.id = this.state.id;
      const instructions = state.instructions.concat(newInstruction);

      return {
        instructions,
        value: '',
      };
    });
    this.setState({id: this.state.id + 1});
  }

  delInstruction(id) {
    const newInstructions = this.state.instructions.filter(item => item.id !== id);
    this.setState({ instructions: newInstructions });
  }

  getData() {
    return (this.state.instructions);
  }

  render () {

    return(
      <View style={ ViewStyles.ide }>
        <View style={{
          flex: 1,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'black',
          margin: 4,       
        }}>
          <HorizontalFlatListInstrutions getData={ this.getData } del={ this.delInstruction }/>
        </View>
        <HorizontalFlatList method={ this.addInstruction }/>
        <View style={{ margin: 4 }}>
            <Button title="Lancer"
            style={{ height: 100 }}
            onPress={() => {
              this.launch();
            }}/>
        </View>
      </View>
    );
  }
}

export default IDE;