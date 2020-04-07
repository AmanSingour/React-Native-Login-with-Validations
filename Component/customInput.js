import React, { Component } from 'react';
import Icon from "react-native-vector-icons/EvilIcons";

import { 
    View, 
    StyleSheet, 
    TextInput, 
    Text
} from 'react-native';

class CustomInput extends Component{
    constructor(props){
        super(props);
        this.state={
            errorMessage: "",
            email : "",
            password : "",
        } 
    }

    _updateValue(value){
        if(this.props.name == "email"){
            this.setState({
                email : value
            })
        }else{
            this.setState({
                password : value,
            })
        }
        this._validate()
    }

    _validate(){
        if (this.props.name == "email") {
            if(this.state.email == ""){
                this.setState({
                    errorMessage: "Email is required."
                })
            }else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))){
                this.setState({
                    errorMessage: "Invalid Email"
                })
            }else{
                this.setState({
                    errorMessage: ""
                })
            }
        } else {
            if (this.state.password == "") {
                this.setState({
                    errorMessage: "Password is required."
                })
            }else if (this.state.password.length <= 6 ) {
                this.setState({
                    errorMessage: "Password should contain minimum 6 character."
                })
            }else {
                this.setState({
                    errorMessage: ""
                })
            }
        }
    }

  render(){
    return(
            <View style={style.container}>
            <View style={[style.inputView, this.state.errorMessage ? style.inputError : {}]}>
                    <Icon name={this.props.icon} size={24} color='#742dd2' />
                    <TextInput
                        ref = {this.props.name}
                        style={style.input}
                        placeholder={this.props.placeholder}
                        secureTextEntry = {this.props.secure}
                    onChangeText={(value) => this._updateValue(value)}
                        onBlur = {() => this._validate() }
                    />
                </View>
                <Text style={style.error}>{this.state.errorMessage}</Text>

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