import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function TvScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>TV COMPONENT!!!!</Text>
    </ScrollView>
  );
}

TvScreen.navigationOptions = {
  title: 'TV',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
});
