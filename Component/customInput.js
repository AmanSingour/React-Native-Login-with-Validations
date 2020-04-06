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
        height: 50,
        errorMessage : null
    }

  render(){
    return(
        <View style={style.outerShadow}>
            <View style={[style.innerShadow,{height: this.state.height}]}>
                <View style={style.inputView}>
                    <Icon name={this.props.icon} size={24} color='black' />
                    <TextInput
                        style={style.input}
                        placeholder={this.props.placeholder}
                    />
                </View>
                <Text style={style.error}>{this.state.errorMessage}</Text>
            </View>
        </View>
    )
  }
}


const style = StyleSheet.create({
  outerShadow:{
      margin: 30,
      padding:20,
      width: 300,
      overflow: "visible",
      borderRadius: 100,
    // shadowColor: '#000',
    // shadowOffset: {width: 70, height: 70},
    // shadowOpacity: 0.4,
    // shadowRadius: 50,
    // elevation: 100,
  },
  innerShadow:{
      width: 300,
      position: "absolute",
      backgroundColor: "#efeeee",
      borderRadius: 100,
    shadowColor: '#ffffff',
    shadowOffset: {width: -70, height: -70},
    shadowOpacity: 0.8,
    shadowRadius: 50,
    elevation: 50,
  },
  inputView:{
      padding:20,
      width: 300,
      height: 50,
      overflow: "visible",
      backgroundColor: "#efeeee",
      justifyContent: 'center',
      borderRadius: 50,
  },
  icon:{
      position: "absolute",
      left: 0
  },
  input:{
      position: "absolute",
      marginLeft: 60,
      paddingTop: 10,
  },
  error:{
      position: "absolute",
      top: 55,
      left: 30,
      color: "red"
  }

})

export default CustomInput