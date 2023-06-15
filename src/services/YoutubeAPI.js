import axios from 'axios';

const API_KEY = 'AIzaSyDHbCJLpxLP19Y0adYql3ux7Eza-idjOdI';
const channelId = 'UCopGInP3Ap38PCFq2-e5JoQ';

// AIzaSyCNJUXsTrreXa3yDqfDwlcipQOiaRU324Y
export const getChannelVideos = async () => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&type=video&key=${API_KEY}`
    );
    return response.data.items;
  } catch (error) {
    console.error('Error fetching channel videos:', error);
    return [];
  }
};
