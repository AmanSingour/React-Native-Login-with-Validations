import React, { Component } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

import Form from './Component/form';

const bgColor = "#efeeee"
class App extends Component{
  render(){
    return(
      <View backgroundColor={bgColor} style={style.Background}>
        <StatusBar backgroundColor={bgColor} barStyle="dark-content" />
        <Text style = {style.heading}>Login</Text>
        <Form />
      </View>
    )
  }
}

const style = StyleSheet.create({
  Background:{
    flex: 1,
    paddingBottom: 100,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  heading:{ 
    color: '#742dd2',
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 150,
  }  
})

export default App