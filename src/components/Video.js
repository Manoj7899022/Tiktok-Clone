import React, { useRef, useState } from 'react'
import short from './video/short.mp4'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';


const Video = ({url,channel, description,song,likes,shares,messages}) => {
    const[playing, setPlaying] = useState(false)
    const videoRef = useRef(null)

    const handleVideoPress = () =>{
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }
        else{
            videoRef.current.play()
            setPlaying(true)
        }
    }

  return (
    <>
    <div className='video'>
        <video className='Video_player' 
        loop
        src={url}
        onClick={handleVideoPress} 
        ref={videoRef} >
        </video>
        <VideoFooter
            channel={channel}
            description={description}
            song={song}
        />
        <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
    </>
  )
}

export default Video