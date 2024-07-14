import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const RoundButton = ({ btnObj }) => {
  const { bgColor, text, width, height, logo, textColor } = btnObj;

  return (
    <View style={[styles.mainContainer, { width, height }]}>
      <TouchableOpacity onPress={() => { }} style={[styles.btnContainer, { backgroundColor: bgColor }]}>
        <View>
          <Text style={[styles.btnText, { color: textColor }]}>{logo} {text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default RoundButton;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  btnContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
