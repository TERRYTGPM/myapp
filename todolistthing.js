import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import db from './config';

export default class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      textValue: '',
      timeValue:""
    };
  }

  addTask = ()=>{

  }

  componentDidMount() {
    console.log(this.state.textValue);
  }

  render() {
    console.log(this.state.textValue);
    return (
      <View style={{ backgroundColor: '#00FFFF' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ paddingRight: 7 }}>
            <Image
              source={require('./assets/add.png')}
              style={{ width: 20, height: 20, borderRadius: 10 }}></Image>
          </TouchableOpacity>
          <TextInput
            placeholder="Task Name"
            onChangeText={(text) => {
              this.setState({
                textValue: text,
              });
            }}></TextInput>

          <TextInput
            placeholder="Time (24 hour)"
            keyboardType="numeric"
            onChangeText={(text) => {
              this.setState({ textValue: text });
            }}
            style={{ width: 100 }}></TextInput>

          <TouchableOpacity style={{ paddingRight: 5 }}>
            <Image
              source={require('./assets/dustbin.png')}
              style={{ width: 20, height: 20, borderRadius: 10 }}></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Images: {},
});
