import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import axios from 'axios';
import YouTubePlayer from './YoutubePlayer';

const API_KEY = 'AIzaSyCNJUXsTrreXa3yDqfDwlcipQOiaRU324Y';
// const channelId = 'UCopGInP3Ap38PCFq2-e5JoQ'; //YSQ-Officials
const channelId = 'UCuK9T9lPVEMnu000Aem95yA'; //highlights waly

const AllVideos = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState('');

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

  const openVideo = (videoId) => {
    // Handle opening the video
    setCurrentVideo(videoId)
    console.log('Opening video:', videoId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>YouTube Channel Videos</Text>
        </View>
        <YouTubePlayer videoId={currentVideo} apiKey={API_KEY} />
        {videos && videos.map((item) => {
          return (
            <TouchableOpacity style={styles.videoItem} onPress={() => openVideo(item.id.videoId)} key={item.id.videoId}>
              <View style={styles.header}>
              <Image source='https://i.ytimg.com/vi/qyVfxfHfIhY/default.jpg' style={styles.scan} />
                <Text style={styles.headerText}>{item.snippet.title}</Text>
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
  header: {
    backgroundColor: '#f4511e',
    padding: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  videoList: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  videoItem: {
    paddingVertical: 8,
  },
  videoTitle: {
    fontSize: 16,
  },
  scan:{
    height:200,
    width:200,
    backgroundColor:'yellow'
  }
});

export default AllVideos;
