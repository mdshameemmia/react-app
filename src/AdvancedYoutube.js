import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Button from './component/Button.component'
import Form from './component/Form.component'
import Input from './component/Input.component'
import VideoList from './component/VideoList.component'
import VideoPlayer from './component/VideoPlayer.component'
import YoutubeLogo from './component/YoutubeLogo.component'

const AdvancedYoutube = () => {
    const [videos, setVideos] = useState([]);
    const [videoId, setVideoId] = useState('');
    const [searchQuery, setSearchQuery] = useState('')

    const video = videos.find(video => video.id.videoId === videoId);

    const handleSearch = async (e) => {
        try {
            e.preventDefault();

            const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
            const key = 'AIzaSyBe96LW7l6ve4wASJpm3KB2KrIFNEjILFE';
            const type = 'video';
            const part = 'snippet';

            const { data } = await axios.get(`${baseUrl}?key=${key}&type=${type}&part=${part}&q=${searchQuery}`)
            setVideos(data.items)

        } catch (err) {
            console.log(err)
        }

    }

    console.log(video,'video test')
    return (
        <div className='container'>
            {/* <div className='row'>
                <span>

                </span>
            </div> */}
            <header className="navbar navbar-expand navbar-light bg-light row my-3">
                <YoutubeLogo className='col-md-2' />
                <Form className={`d-flex`} onSubmit={handleSearch}>
                    <Input
                        className='form-control col-md-6'
                        name='search'
                        type='text'
                        handleChange={e => setSearchQuery(e.target.value)}
                        placeholder='search'
                        value={searchQuery}
                    />
                    <Button
                        type="submit"
                        className="btn btn-outline-success "
                        text='Search'
                    />
                </Form>
            </header>

            <div className="row">
                <VideoPlayer
                    videoId={ videoId }
                    title={video?.snippet?.title || ''}
                    description={video?.snippet?.description || ''}
                />

                <VideoList handleSelect={videoId => setVideoId(videoId)} videos={videos} />

            </div>


        </div>
    )
}

export default AdvancedYoutube