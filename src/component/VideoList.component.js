import React from 'react'
import Video from './Video.component'

const VideoList = ({ videos, handleSelect }) => {
 
    return (
        <div className='col-lg-4 vid-measure '>
            <ul className="list-group">
                {
                   videos &&  videos.map((video, index) => (
                        <Video  
                            key={index} 
                            handleSelect={handleSelect} 
                            imgUrl={video.snippet.thumbnails.high.url} 
                            title={video.snippet.title}
                            description={video.snippet.description} 
                            videoId={video.id.videoId}
                            channelTitle={video.snippet.channelTitle}
                       />
                   ))
                    
                }
               
            </ul>
        </div>
    )
}

export default VideoList