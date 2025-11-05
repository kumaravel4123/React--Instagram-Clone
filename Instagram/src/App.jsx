import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
   <div className='d-flex vh-100'>
    <div className='w-20'> <Sidebar /></div>
    <div className='w-50 bg-secondary'>Feed</div>
    <div className='w-30'>Suggestion</div>
   </div>
  )
}

export default App