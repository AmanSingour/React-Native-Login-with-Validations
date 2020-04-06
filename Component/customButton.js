import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default CustomButton = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={{color : "#fff", fontSize: 15, textTransform: "uppercase",}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      marginTop: 50,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
      width: 150,
      padding: 15,
      position: "absolute",
      backgroundColor: "#742dd2",
      borderRadius: 100,
    shadowColor: '#ffffff',
    shadowOffset: {width: -70, height: -70},
    shadowOpacity: 0.3,
    shadowRadius: 50,
    elevation: 10,
  }
});
