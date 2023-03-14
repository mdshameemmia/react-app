import React from 'react'
import { Link , BrowserRouter , Routes, Route} from 'react-router-dom'
import AdvancedYoutube from './AdvancedYoutube'
import Main from './Main'
import Youtube from './Youtube'

const App = () => {
  
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/youtube' element={<Youtube />}></Route>
          <Route path='/advanced-youtube' element={<AdvancedYoutube />}></Route>
          <Route path='/' element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )

}

export default App