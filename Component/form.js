import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import CustomInput from './customInput';
import CustomButton from './customButton';

import ValidationComponent from 'react-native-form-validator';

class Form extends ValidationComponent{
  constructor(props) {
    super(props);
    this.state = {
      height: 60,
      email: "amansingour15@gmail.com",
      password: "123456"
    };
  }

  validate() {
    this.validate({
      email: { email: true, required: true }
    });
  }
  render(){
    return(
      <View >
        <CustomInput
          name = "email"
          icon = "envelope"
          placeholder = "Email"
          errorMessage = ""
        />
        <CustomInput
          name = "password"
          icon = "lock"
          placeholder = "Password"
          secure = {true}
        />
        <CustomButton/>
      </View>
    )
  }
}

export default Form