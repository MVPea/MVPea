import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';

export default function TvScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      {/* <ExpoLinksView /> */}

      <Text>TV COMPONENT</Text>
      <Text>This component is suppose to have a carousel</Text>
      <Text>Using images from the API</Text>
    </ScrollView>
  );
}

TvScreen.navigationOptions = {
  title: 'TV',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
