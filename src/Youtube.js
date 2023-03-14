import React from 'react'
import Button from './component/Button.component'
import Form from './component/Form.component'
// import Header from './component/Header.component'
import Input from './component/Input.component'
import VideoList from './component/VideoList.component'
import VideoPlayer from './component/VideoPlayer.component'
import YoutubeLogo from './component/YoutubeLogo.component'

const Youtube = () => {
    const handleClick = (e)=>{
        console.log(e)
    }
  return (
    <div className='container my-3'>

          <header className="navbar navbar-expand navbar-light bg-light row my-3">
              <YoutubeLogo className='col-md-2' />
              <Form className={`d-flex`}>
                  <Input
                      className='form-control col-md-6'
                      name='search'
                      type='text'
                      event={handleClick}
                      placeholder='search'
                  />
                  <Button
                      type="submit"
                      className="btn btn-outline-success "
                      text='Search'
                  />
              </Form>
          </header>

        <main className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <VideoPlayer />
                </div>
                <div className="col-md-4">
                <VideoList />
                    
                </div>
            </div>
        </main>

    </div>
  )
}

export default Youtube