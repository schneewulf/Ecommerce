// @flow
import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, Alert} from 'react-native';
import {Constants, BarCodeScanner, Permissions} from 'expo';

const {width: WINDOW_WIDTH} = Dimensions.get('window');
const BARCODE_SIZE = WINDOW_WIDTH * 0.7;
let scannerStyle = {height: BARCODE_SIZE, width: BARCODE_SIZE};

type State = {
  // hasCameraPermission: ?boolean,
  hasCameraPermission: boolean | null,
};

type Props = {
  navigation: NavigationProps,
};

export default class HomeScene extends Component<Props, State> {
  state = {
    hasCameraPermission: null,
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = (data) => {
    Alert.alert('Scan successful!', JSON.stringify(data));
  };

  render() {
    let param = this.props.navigation.getParam('name', '');
    let pass = this.props.navigation.getParam('pass', '');
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ? (
          <Text>Requesting for camera permission</Text>
        ) : this.state.hasCameraPermission === false ? (
          <Text>Camera permission is not granted</Text>
        ) : (
          <View style={[scannerStyle, {overflow: 'hidden'}]}>
            <BarCodeScanner
              torchMode="off"
              onBarCodeRead={this._handleBarCodeRead}
              barCodeTypes={['qr']}
              style={scannerStyle}
            />
          </View>
        )}
        <View
          style={{
            paddingTop: 10,
            marginTop: 20,
            flex: 1,
            backgroundColor: 'lightgrey',
            alignSelf: 'stretch',
          }}
        >
          <Text>{`${param} ganteng bnget deh`}</Text>
          <Text>{`${pass} ds`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingTop: Constants.statusBarHeight + 20,
    alignItems: 'center',
  },
});
