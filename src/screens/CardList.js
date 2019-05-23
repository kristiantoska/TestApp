import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import CollapsibleCard from '../components/CollapsibleCard';

const fakeData = new Array(20).fill(0);

const CardList = ({ data = fakeData, navigation }) => (
  <FlatList
    data={data}
    keyExtractor={(el, index) => String(index)}
    style={{ backgroundColor: 'lightgray' }}
    renderItem={() => <CollapsibleCard />}
    ListHeaderComponent={
      <React.Fragment>
        <TouchableOpacity style={styles.topButton} onPress={() => navigation.navigate('TransitionScreen')} />

        <TouchableOpacity style={styles.topButton} onPress={() => navigation.navigate('TransitionScreen2')} />
      </React.Fragment>
    }
  />
);

const styles = StyleSheet.create({
  topButton: {
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 20
  }
});

export default CardList;
