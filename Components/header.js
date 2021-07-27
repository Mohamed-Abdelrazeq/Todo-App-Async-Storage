import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {StatusBar} from 'react-native';

const headerHeight    = StatusBar.currentHeight + 60;
const statusBarHeight = StatusBar.currentHeight + 20;

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: headerHeight,
    paddingTop: statusBarHeight,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});