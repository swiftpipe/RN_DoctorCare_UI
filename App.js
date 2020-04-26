/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import BottomTab from './src/component/BottomTab';
import BackgroundHeader from './src/component/BackgroundHeader';
import HomeScreen from './src/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <BackgroundHeader style={styles.bg} />
        <ScrollView style={styles.scrollView}>
          <HomeScreen />
        </ScrollView>
        <BottomTab />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F1F2',
  },
  bg: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 250,
  },
  scrollView: {
    flex: 1,
  },
});

export default App;
