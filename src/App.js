import React from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPoat/RowPost'
import {action,originals} from './url'




function App() {
  return (
    <div>
   <Navbar/>
   <Banner/>
   <RowPost url={originals} title='Netflix Originals'/>
   <RowPost url={action} title='Action' isSmall/>
    </div>
  )
}

export default App
