import React, { Component } from 'react';
import { FlatList } from 'react-native';

import RootCheckGate from './components/RootCheckGate';
import BackgroundCheckGate from './components/BackgroundCheckGate';
import LaunchScreenAnim from './components/LaunchScreenAnim';
import CollapsibleCard from './components/CollapsibleCard';

const fakeData = new Array(20).fill(0);

export default class App extends Component {
  state = { animation: true };

  render() {
    if (this.state.animation) {
      return <LaunchScreenAnim onAnimationFinish={() => this.setState({ animation: false })} />;
    }

    return (
      <FlatList
        style={{ backgroundColor: 'lightgray' }}
        keyExtractor={(el, index) => String(index)}
        data={fakeData}
        renderItem={() => <CollapsibleCard />}
      />
    );
  }
}
