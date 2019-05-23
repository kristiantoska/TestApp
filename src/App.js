import React, { Component } from 'react';
import { FlatList } from 'react-native';

import RootCheckGate from 'react-native-root-check';

import BackgroundCheckGate from './components/BackgroundCheckGate';
import LaunchScreenAnim from './components/LaunchScreenAnim';

import AppNavigator from './navigation';

export default class App extends Component {
  state = { animation: false };

  render() {
    if (this.state.animation) {
      return <LaunchScreenAnim onAnimationFinish={() => this.setState({ animation: false })} />;
    }

    return (
      <RootCheckGate>
        <BackgroundCheckGate>
          <AppNavigator />
        </BackgroundCheckGate>
      </RootCheckGate>
    );
  }
}
