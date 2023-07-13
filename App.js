import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import YouTubePlayer from './src/components/YoutubePlayer';
import AllVideos from './src/components/AllVideos';

export default function App() {
  return (
    <View style={styles.container}>
      <AllVideos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
