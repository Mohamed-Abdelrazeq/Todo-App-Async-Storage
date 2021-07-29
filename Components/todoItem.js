import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ pressHandler, item }) {
  return (
    
    <View style={styles.item}>
      <Text style={styles.layout}>{item.text}</Text>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <MaterialIcons name="delete" size={24} color="#333" />
      </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
  item: {
    flex:1,
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems : 'center',

  },
  layout : {
  }
});