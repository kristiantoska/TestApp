import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';

const CollapsibleCard = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.top} />

      <View style={[styles.center, collapsed && styles.centerCollapsed]} />

      <TouchableOpacity
        style={styles.bottom}
        onPress={() => {
          LayoutAnimation.easeInEaseOut();
          setCollapsed(!collapsed);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 10
  },

  top: {
    height: 150,
    borderWidth: StyleSheet.hairlineWidth
  },

  bottom: {
    height: 50,
    borderWidth: StyleSheet.hairlineWidth
  },

  center: {
    height: 100,
    backgroundColor: 'red'
  },

  centerCollapsed: {
    height: 0
  }
});

export default CollapsibleCard;
