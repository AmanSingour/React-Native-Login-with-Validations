import React, { Component } from 'react';
import Icon from "react-native-vector-icons/EvilIcons";

import { 
    View, 
    StyleSheet, 
    TextInput, 
    Text
} from 'react-native';

class CustomInput extends Component{
    state = {
        errorMessage: ""
    }
  render(){
    return(
            <View style={style.container}>
            <View style={[style.inputView, this.state.errorMessage ? style.inputError : {}]}>
                    <Icon name={this.props.icon} size={24} color='#742dd2' />
                    <TextInput
                        style={style.input}
                        placeholder={this.props.placeholder}
                        secureTextEntry = {this.props.secure}
                    />
                </View>
                <Text style={style.error}>{this.props.errorMessage}</Text>

            </View>
    )
  }
}


const style = StyleSheet.create({
  container:{
      margin: 30,
      padding:20,
      width: 300,
      overflow: "visible",
      borderRadius: 100,
  },
  inputView:{
      padding:20,
      width: 300,
      display: "flex",
      flexDirection: "row",
      position: "absolute",
      backgroundColor: "#efeeee",
      justifyContent: 'space-between',
      borderRadius: 50,
      elevation: 10,
  },
  icon:{
      position: "absolute",
      left: 0,
  },
  input:{
      position: "absolute",
      marginLeft: 60,
      paddingTop: 15,
  },
  inputError:{
    borderColor: "red",
    borderWidth: 0.7,
  },
  error:{
      position: "absolute",
      top: 70,
      left: 30,
      color: "red",
      fontSize: 12,
  }

})

export default CustomInput