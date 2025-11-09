import React, { useEffect, useState } from 'react'
import "./Stories.css"



function Stories() {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then(data => data.json())
      .then(data => setStories(data))
      .catch(err => console.log(err))
  })

  return (
    <div className='stories d-flex'>
      {stories.length > 0 ? (
        stories.map((story) => (
            <div key={story.id} className=''>
              <div className="gradient-border mx-1">
                <img src={story.profilePic} alt="" className='story-dp rounded-circle' />
              </div>
              <small className='text text-truncate' style={{width:"50px"}}>{story.username}</small>
            </div>
          ))
        

      ) : (
        <p>Loading</p>
      )}
    </div>
  )
}

export default Stories