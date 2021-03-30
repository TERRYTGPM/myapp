import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from "./todolistthing";

export default class App extends React.Component {
  render(){
  return (
    <ToDoList></ToDoList>
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
});
