import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ videoId, title, description }) => {
 console.log(videoId,title,description,'video player')
    return (
        // <ReactPlayer   loop autoPlay muted url={`https://www.youtube.com/watch?v=${videoId}`}  controls width="100%" />
        <div className='col-lg-8 mb-4'>
            <div className='video'>
                <iframe 
                  width="100%"
                  height={468}
                  src={`https://www.youtube.com/embed/${videoId}`}
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                >
                </iframe>
            </div>

            <div className='details'>
                <h6>{title}</h6>
                <div>
                    <p>{ description }</p>
                </div>
            </div>
            
        </div>

    )
}

export default VideoPlayer