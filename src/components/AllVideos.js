import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios';
import YouTubePlayer from './YoutubePlayer';

const API_KEY = 'AIzaSyCNJUXsTrreXa3yDqfDwlcipQOiaRU324Y';
const channelId = 'UCopGInP3Ap38PCFq2-e5JoQ';

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
      console.log('data',data);

    const videos = data.items;
    console.log('videos',videos);
      setVideos(videos);
    } catch (error) {
      console.error('Error fetching channel videos:', error);
    }
  };

  // const renderVideoItem = ({ item }) => (
  //   <TouchableOpacity style={styles.videoItem} onPress={() => openVideo(item.id.videoId)}>
  //     <Text style={styles.videoTitle}>{item.snippet.title}</Text>
  //   </TouchableOpacity>
  // );

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
      <YouTubePlayer videoId={currentVideo} />
      {videos && videos.map((item)=>{
        return(
          <TouchableOpacity style={styles.videoItem} onPress={() => openVideo(item.id.videoId)} key={item.id.videoId}>
          <View style={styles.header}>
        <Text style={styles.headerText}>{item.snippet.title}</Text>
      </View>
    </TouchableOpacity>
        )
      })}
      {/* <FlatList
        data={videos}
        renderItem={(item)=>{
          return(
          <TouchableOpacity style={styles.videoItem} onPress={() => openVideo(item.id.videoId)}>
      <Text style={styles.videoTitle}>{item.etag}</Text>
    </TouchableOpacity>
          )
        }}
        keyExtractor={(item) => item.id.videoId}
        contentContainerStyle={styles.videoList}
      /> */}
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
});

export default AllVideos;
