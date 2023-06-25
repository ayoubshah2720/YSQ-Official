import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
// import YouTube from 'react-native-youtube';
import { WebView } from 'react-native-webview';

const YouTubePlayer = ({ videoId }) => {
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <View style={styles.container}>
      {/* <YouTube
        apiKey="AIzaSyCNJUXsTrreXa3yDqfDwlcipQOiaRU324Y"
        videoId={videoId}
        style={styles.youtubePlayer}
      /> */}
      {/* <YouTube
      apiKey="AIzaSyCNJUXsTrreXa3yDqfDwlcipQOiaRU324Y"
      videoId={videoId} // The YouTube video ID
      play // control playback of video with true/false
      fullscreen // control whether the video should play in fullscreen or inline
      loop // control whether the video should loop when ended
      style={{ alignSelf: 'stretch', height: 300 }}/> */}
      <WebView source={{ uri: youtubeUrl }} />
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
    height: Dimensions.get('window').width * 0.56, // 16:9 aspect ratio
  },
});

export default YouTubePlayer;
