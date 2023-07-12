import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import YouTube from 'react-native-youtube';
import { WebView } from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";

const YouTubePlayer = ({ videoId, apiKey }) => {
  const [playing, setPlaying] = useState(true);
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;
  console.log('clicked', videoId);
  console.log('apikey', apiKey);
  // const API_KEY = 'AIzaSyCNJUXsTrreXa3yDqfDwlcipQOiaRU324Y';


  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        width={300}
        play={playing}
        videoId={videoId}
      // videoId={'3dWpLADVB00'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  youtubePlayer: {
    alignSelf: 'stretch',
    // height: 300,
    // width:200,
  },
});

export default YouTubePlayer;
