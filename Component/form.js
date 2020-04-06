import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import CustomInput from './customInput';
import CustomButton from './customButton';

class Form extends Component{
  render(){
    return(
      <View >
        <CustomInput
          name = "email"
          icon = "envelope"
          placeholder = "Email"
        />
        <CustomInput
          name = "password"
          icon = "lock"
          placeholder = "Password"
        />
        <CustomButton/>
      </View>
    )
  }
}

export default Form