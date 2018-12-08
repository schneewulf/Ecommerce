// @flow

import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: 15,
    height: 40,
    width: 255,
    borderColor: 'darkgrey',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: 'lightskyblue',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
  boxImage: {
    width: 80,
    height: 80,
    backgroundColor: 'chocolate',
  },
});

type Props = {
  navigation: NavigationProps,
};

type State = {
  username: string,
  password: string,
};

class Inputs extends Component<Props, State> {
  state = {
    username: '',
    password: '',
  };
  handleEmail = (username: string) => {
    this.setState({username});
  };
  handlePassword = (text: string) => {
    this.setState({password: text});
  };
  _onLoginPress = () => {
    let {username, password} = this.state;
    if (username === 'udaya' && password === '123') {
      this.props.navigation.navigate('Home', {
        name: username,
        pass: password,
      });
    } else {
      Alert.alert('Wrong', 'Wrong Account!', [{text: 'OK'}, {text: 'Cancel'}]);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxImage} />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="User Name"
          placeholderTextColor="lightgrey"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="lightgrey"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />
        <Text style={{textDecorationLine: 'underline', color: 'darkblue'}}>
          Forget Your Password?
        </Text>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this._onLoginPress}
        >
          <Text style={styles.submitButtonText}> Login </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Inputs;
