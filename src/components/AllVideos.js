import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import axios from 'axios';
import YouTubePlayer from './YoutubePlayer';

const API_KEY = 'AIzaSyCNJUXsTrreXa3yDqfDwlcipQOiaRU324Y';
const channelId = 'UCopGInP3Ap38PCFq2-e5JoQ'; //YSQ-Officials
// const channelId = 'UCuK9T9lPVEMnu000Aem95yA'; //highlights waly

const AllVideos = () => {
  // const { navigation } = props
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(false);

  useEffect(() => {
    fetchChannelVideos();
  }, []);

  const fetchChannelVideos = async () => {

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&type=video&key=${API_KEY}`
      );
      const data = await response.json();

      const videos = data.items;
      setVideos(videos);
      console.log('videos',videos[0].snippet.thumbnails.default.url)
    } catch (error) {
      console.error('Error fetching channel videos:', error);
    }
  };

  const openVideo = (video) => {
    // Handle opening the video
    setCurrentVideo(video)
    // navigation.navigation('YoutubePlayer',video)
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Yaqub Shah Officials</Text>
        </View>
        {currentVideo && <YouTubePlayer video={currentVideo} apiKey={API_KEY} />}
        {videos && videos.map((item) => {
          return (
            <TouchableOpacity style={styles.videoItem} onPress={() => openVideo(item)} key={item.id.videoId}>
              <View style={styles.header}>
              <Image source={{uri:item.snippet.thumbnails.high.url}} style={styles.thumbnail} />
                <Text style={styles.videoTitle}>{item.snippet.title}</Text>
                {/* <Text style={styles.headerText}>{item.snippet.title}</Text> */}
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main:{
    width:'100%'
  },
  header: {
    width:'100%',
    // backgroundColor:'#5AAA85',
    // padding: 16,
  },
  headerText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'#5AAA85',
    paddingVertical:20,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    marginVertical:10,
    color:'#fff'
  },
  videoList: {
    paddingHorizontal: 16,
    // marginVertical:20,
    // paddingTop: 16,
  },
  videoItem: {
    backgroundColor:'#5AAA85',
    marginHorizontal: 8,
  },
  videoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#fff',
    paddingHorizontal:20,
    // textAlign: 'center',
  },
  thumbnail:{
    height:200,
    width:'100%',
  }
});

export default AllVideos;
