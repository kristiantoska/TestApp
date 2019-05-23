import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

import RootCheckGate from './RootCheckGate';
import BackgroundCheckGate from './BackgroundCheckGate';

const { width, height } = Dimensions.get('window');

export default class App extends Component {
  state = { animation: true };

  render() {
    console.log(require('./splash-animation.json'));

    if (this.state.animation) {
      return (
        <LottieView
          autoPlay
          loop={false}
          source={require('./splash-animation.json')}
          style={{ backgroundColor: 'blue' }}
          onAnimationFinish={() => this.setState({ animation: false })}
          resizeMode="cover"
        />
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <View />
      </View>
    );
  }
}
