import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import Suggesstions from './Components/Suggesstion/Suggesstions';


function App() {
  return (
   <div className='d-flex vh-100'>
    <div className='w-20'> <Sidebar /></div>
    <div className='feed'> <Feed/></div>
    <div className='w-30'> <Suggesstions/> </div>
   </div>
  )
}

export default App