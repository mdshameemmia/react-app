import React from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import Youtube from './Youtube'

const Main = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary my-2">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <Link className='nav-link font-weight-bold ' to={`/youtube`}>
                        <button className='btn btn-primary btn-rounded'>Youtube</button>
                      </Link>
                      <Link className='nav-link font-weight-bold ' to={`/advanced-youtube`}>
                      <button className='btn btn-primary btn-rounded'>Advanced Youtube</button>
                      </Link>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Main