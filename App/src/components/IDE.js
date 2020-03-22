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

// Temporary.
const exampleData = [...Array(20)].map((d, index) => ({
    key: `item-${index}`, // For example only -- don't use index as your key!
    label: index,
    backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index *
      5}, ${132})`
  }));

// Temporary.
var InstructionsData = [

  {
    name: 'Avant',
    icon: null,
    description: 'La voiture avance.'
  },
  {
    name: 'Arrière',
    icon: null,
    description: 'La voiture recule.'
  },
  {
    name: 'Gauche',
    icon: null,
    description: 'La voiture tourne à gauche.'
  },
  {
    name: 'Droite',
    icon: null,
    description: 'La voiture tourne à droite.'
  },
  {
    name: 'Stop',
    icon: null,
    description: 'La voiture s\'arrète.'
  },

];

class HorizontalFlatListItem extends Component {
  render () {
    return (
      <View style={ViewStyles.flatlistitem}>
        <Text style={ ViewStyles.itemtext}>
          {this.props.item.name}
        </Text>
        <Text style={ ViewStyles.itemtext}>
          {this.props.item.description}
        </Text>
      </View>
    );
  }
}

class HorizontalFlatList extends Component {

  render() {
    return (
      <View style={ ViewStyles.ide }>
        <View style={{
          flex: 1,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'purple',
          margin: 4,       
        }}>
        </View>
        <View style={ ViewStyles.instructions }>
          {/* <TouchableOpacity onPress={ () => {
            alert(`You pressed  + ${this.props.item.name}`);
          }}
          style={ ViewStyles.touchable }>
          </TouchableOpacity> */}
          <Text>
            Instructions
          </Text>
          <View style={{ height: 80 }}>
            <FlatList
              horizontal={ true }
              data={ InstructionsData }
              renderItem={({ item, index }) => {
                return (
                  <HorizontalFlatListItem item={ item } index={ index } parentFlatList={ this }>
                  </HorizontalFlatListItem>
                );
              }}
              keyExtractor={ (item, index) => item.name }
            >
            </FlatList>
          </View>
        </View>
        <View style={{ margin: 4 }}>
          <Button title="Lancer"
          style={{ height: 100 }}/>
        </View>
      </View>
    );
  }
}

class IDE extends Component {
  render () {
    return(
      <HorizontalFlatList>

      </HorizontalFlatList>
    );
  }
}

// class IDE extends Component {

//   state = {
//       data: exampleData
//     };

//   renderItem = ({ item, index, drag, isActive }) => {
//     return (
//       <TouchableOpacity
      
//         style={{
//           height: 150,
//           width: 150,
//           backgroundColor: isActive ? "blue" : item.backgroundColor,
//           alignItems: "center",
//           justifyContent: "center"
//         }}
//         // When tapping a cell.
//         delayLongPress={100}
//         onLongPress={drag}
//       >
//         <Text style={TextStyle.ButtonText}>
//           {item.label}
//         </Text>
//       </TouchableOpacity>
//     );
//   };

//   render() {
//     return(
//       <View style={ViewStyles.ide}>
//           <DraggableFlatList
//           data={this.state.data}
//           renderItem={this.renderItem}
//           keyExtractor={(item, index) => `draggable-item-${item.key}`}
//           onDragEnd={({ data }) => this.setState({ data })}
//           horizontal={true}
//           />
//       </View>
//     );
//   }
// }

export default IDE;