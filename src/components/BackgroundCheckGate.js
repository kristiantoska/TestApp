import React, { useEffect, useState } from 'react';
import { View, StyleSheet, AppState } from 'react-native';

const BackgroundCheckGate = ({ children }) => {
  const [appState, setAppState] = useState('active');

  function handleAppStateChange(nextAppState) {
    setAppState(nextAppState);
  }

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => AppState.removeEventListener('change', handleAppStateChange);
  }, []);

  return (
    <React.Fragment>
      <View style={{ flex: 1 }}>{children}</View>

      {appState !== 'active' && <View style={{ ...StyleSheet.absoluteFill, backgroundColor: 'red' }} />}
    </React.Fragment>
  );
};

export default BackgroundCheckGate;
