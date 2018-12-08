import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class SettingsScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Beep</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
