import React, { Component } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

import Form from './Component/form';

const Color = {
  bgColor : "#efeeee",
  primaryColor : "#742dd2"
}

class App extends Component{
  render(){
    return(
      <View backgroundColor={Color.bgColor} style={style.Background}>
        <StatusBar backgroundColor={Color.bgColor} barStyle="dark-content" />
        <View style={{
          flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text style={style.heading}>Login</Text>
        </View>
        <View style={{flex: 1}}>
          <Form />
        </View>
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
    color: Color.primaryColor,
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
  }  
})

export default App