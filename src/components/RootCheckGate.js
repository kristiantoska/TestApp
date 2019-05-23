import React from 'react';
import { View } from 'react-native';
import JailMonkey from 'jail-monkey';

const RootCheckGate = ({ children }) => {
  const rootActive = JailMonkey.isJailBroken();

  // ignore root check on emu since all emus are rooted
  if (!__DEV__ && rootActive) {
    return <View />;
  }

  return children;
};

export default RootCheckGate;
