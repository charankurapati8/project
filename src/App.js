import React from 'react'
import Landingpage from './stores/pages/landingpage'
import {Route, Routes} from 'react-router-dom'
import Mobilepage from './stores/pages/mobilepage'
import Computerpage from './stores/pages/computerpage'
import Tvpage from './stores/pages/tvpage'
import Acpage from './stores/pages/acpage'
import Watchpage from './stores/pages/watchpage'
import Mobilesingle from './singles/mobilesingle'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path ='/' element={ <Landingpage/>}/>
        <Route path='mobile' element = {<Mobilepage/>}/>
        <Route path='computer' element = {<Computerpage/>}/>
        <Route path='tv' element = {<Tvpage/>}/>
        <Route path='ac' element = {<Acpage/>}/>
        <Route path='watches' element = {<Watchpage/>}/>
        <Route path='/mobile/:id' element={<Mobilesingle/>}/>
      </Routes>
     
    </div>
  )
}

export default App
