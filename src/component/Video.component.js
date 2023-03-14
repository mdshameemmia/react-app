import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ handleSelect, imgUrl, title, videoId, description, channelTitle  }) => {

    return (
        <div className={`list-group-item d-flex`} onClick={() => handleSelect(videoId)}>
            {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls height={60} width={160} /> */}
            <div className='row'>
                <div className='col-lg-6 mr-auto'>
                    <img src={imgUrl} className='list-image' />
                </div>
                <div className='col-lg-6 ps-0'>
                    <div>
                        <span className='heading-wrap'>
                            <p className='list-heading'>{title}</p>
                        </span>
                        <p className='list-description'>{channelTitle}</p>
                    </div>
                </div>
            </div>
            {/* <div style={{ "width": "300px", "margin": "0 10px" }}>
                <p style={{ "fontSize": '14px', "margin": 0 }}>{video.snippet.description.substr(0, 60)}</p>
                <p style={{ "fontSize": '12px', "margin": 0 }}>{video.snippet.channelTitle}</p>
            </div> */}
        </div>
    )
}

export default Video