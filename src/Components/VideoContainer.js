import React, { useEffect, useState } from 'react';
import { YOUTUBE_LIKED_VIDEO } from '../utils/constants';
import VideoCard from "./VideoCard";
import { Link } from 'react-router';
import { AddvideoCard } from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getLikedVideos = async () => {
    const data = await fetch(YOUTUBE_LIKED_VIDEO);
    const json = await data.json();
    console.log("jssson", json.items);
    setVideos(json.items);

  }

  useEffect(() => {

    getLikedVideos();

  }, [])
  return videos && (
    <div className='video-Container'>
      {videos && <AddvideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video?.id}><VideoCard key={video?.id} info={video} /> </Link>))}
    </div>
  )
}

export default VideoContainer;