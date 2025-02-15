import React from 'react'
import Landingpage from './stores/pages/landingpage'
import {Route, Routes} from 'react-router-dom'
import Mobilepage from './stores/pages/mobilepage'
import Computerpage from './stores/pages/computerpage'
import Tvpage from './stores/pages/tvpage'
import Acpage from './stores/pages/acpage'
import Watchpage from './stores/pages/watchpage'
import Mobilesingle from './singles/mobilesingle'
import ComputerSingle from './singles/computersingle'
import TvSingle from './singles/tvsingle'
import WatchSingle from './singles/watchsingle'
import AcSingle from './singles/acsingle'
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
        <Route path='/computer/:id' element = {<ComputerSingle/>}/>
        <Route path='/tv/:id' element = {<TvSingle/>}/>
        <Route path='/watches/:id' element = {<WatchSingle/>}/>
        <Route path='/ac/:id' element = {<AcSingle/>}/>
      </Routes>
     
    </div>
  )
}

export default App
