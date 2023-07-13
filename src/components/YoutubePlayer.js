import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

const YouTubePlayer = ({video, apiKey}) => {
  const [playing, setPlaying] = useState(true);
  // const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;
  console.log('clicked', video);
  // const API_KEY = 'AIzaSyCNJUXsTrreXa3yDqfDwlcipQOiaRU324Y';


  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={250}
        width={'100%'}
        play={playing}
        videoId={video?.id?.videoId}
      />
      <Text style={styles.headerText}>{video?.snippet?.thumbnails?.title}</Text>
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
