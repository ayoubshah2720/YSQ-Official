import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import YouTube from 'react-native-youtube';
import { WebView } from 'react-native-webview';

const YouTubePlayer = ({ videoId, apiKey }) => {
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;
  // console.log('clicked');
  return (
    <View style={styles.container}>
      {/* <YouTube
        apiKey="AIzaSyCNJUXsTrreXa3yDqfDwlcipQOiaRU324Y"
        videoId={videoId}
        style={styles.youtubePlayer}
      /> */}
      <YouTube
      apiKey={apiKey}
      videoId={videoId} // The YouTube video ID
      play // control playback of video with true/false
      fullscreen // control whether the video should play in fullscreen or inline
      loop // control whether the video should loop when ended
      style={{ alignSelf: 'stretch', height: 300 }}/>
      {/* <WebView source={{ uri: youtubeUrl }} /> */}
      {/* <WebView
        source={{ uri: youtubeUrl }}
        allowsInlineMediaPlayback={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mediaPlaybackRequiresUserAction={false}
      /> */}
      {/* <YouTube
      apiKey={apiKey}
      videoId={videoId}
      style={styles.youtubePlayer}
    /> */}
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
  // youtubePlayer: {
  //   alignSelf: 'stretch',
  //   height: 300,
  // },
});

export default YouTubePlayer;
