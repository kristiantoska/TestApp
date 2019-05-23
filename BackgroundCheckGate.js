import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, AppState } from 'react-native';

const BackgroundCheckGate = ({ children }) => {
  const [appState, setAppState] = useState('active');
  const wrapper = useRef(null);

  function handleAppStateChange(nextAppState) {
    console.log('nextState', nextAppState);

    // if (nextAppState === 'background') {
    //   wrapper.current.setNativeProps({
    //     opacity: 0
    //   });
    // }

    // if (nextAppState === 'active') {
    //   wrapper.current.setNativeProps({
    //     opacity: 1
    //   });
    // }

    setAppState(nextAppState);
  }

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => AppState.removeEventListener('change', handleAppStateChange);
  }, []);

  console.log(appState);

  return (
    <React.Fragment>
      <View ref={wrapper} style={{ flex: 1 }}>
        {children}
      </View>

      {appState !== 'active' && <View style={{ ...StyleSheet.absoluteFill, backgroundColor: 'red' }} />}
    </React.Fragment>
  );
};

export default BackgroundCheckGate;
