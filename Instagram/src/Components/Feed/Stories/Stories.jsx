import React, { useEffect, useState } from 'react'
import "./Stories.css"
import { useNavigate } from 'react-router-dom';



function Stories() {

  const navigate = useNavigate();

  const [stories, setStories] = useState([]);

  let tot = 0;

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then(data => data.json())
      .then(data => setStories(data))
      .catch(err => console.log(err))
  },[])

  

  return (
    <div className='stories d-flex'>
      <div className='d-none'>
        {tot=stories.length}
      </div>
      {stories.length > 0 ? (
        stories.map((story) => (
            <div key={story.id} className='' onClick={()=>{navigate(`stories/${story.id}/${tot}`)}}>
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