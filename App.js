import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'left',
            marginTop: '30%',
          }}>
          <View style={{ flex: 1 }}>
            <Button title="AC" color="#C4C5C6"></Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button title="+/-" color="#C4C5C6"></Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button title="%" color="#C4C5C6"></Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button title="÷" color="#F98D11"></Button>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'left',
          }}>
          <View style={{ flex: 1 }}>
            <Button title="7" color="#D3D4D6"></Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button title="8" color="#D3D4D6"></Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button title="9" color="#D3D4D6"></Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button title="X" color="#F98D11"></Button>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'left',
          }}>
          <View style={{ flex: 1 }}>
            <Button title="4" color="#D3D4D6"></Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button title="5" color="#D3D4D6"></Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button title="6" color="#D3D4D6"></Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button title="-" color="#F98D11"></Button>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'left',
          }}>
          <View style={{ flex: 1 }}>
            <Button title="1" color="#D3D4D6"></Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button title="2" color="#D3D4D6"></Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button title="3" color="#D3D4D6"></Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button title="+" color="#F98D11"></Button>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'left',
          }}>
          <View style={{ flex: 2 }}>
            <Button title="0" color="#D3D4D6"></Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button title="." color="#D3D4D6"></Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button title="=" color="#F98D11"></Button>
          </View>
        </View>
      </View>
    );
  }
}
