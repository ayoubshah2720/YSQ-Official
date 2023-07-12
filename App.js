import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import YouTubePlayer from './src/components/YoutubePlayer';
import AllVideos from './src/components/AllVideos';

export default function App() {
  return (
    <View style={styles.container}>
      <AllVideos />
      {/* <View style={{height:300, width:300}}>
      <YouTubePlayer/>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
