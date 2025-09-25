import React from 'react';

const VideoCard = ({ info }) => {
  console.log("infffo", info);
  if (!info) {
    return null;
  }
  const { snippet, statistics } = info;


  return (
    <div className='video-card'>
      <img src={snippet?.thumbnails?.high?.url} alt="video-image" />
      <b>{snippet?.channelTitle}</b>
      <p>{statistics?.viewCount} views</p>
      <p>Likes : {statistics?.likeCount} </p>
    </div>
  )
}

export const AddvideoCard = ({info}) => {

  return <div className='enhance-video-card'><VideoCard info={info}/></div>

}

export default VideoCard;