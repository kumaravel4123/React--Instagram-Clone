import React, { useEffect, useState } from 'react'
import "./Stories.css"
import { useNavigate } from 'react-router-dom';
import data from '../../../assets/js/data';
import Navbar from '../../Navbar/Navbar';

function Stories() {

  const navigate = useNavigate();
  const [stories, setStories] = useState([]);

  let tot = 0;

  useEffect(() => {
    setStories(data.stories);
  },[])

  return (

    <>
    <div className='navbar-ins'> <Navbar/> </div>
    <div className="stories-container">
      <div className='d-none'>
        {tot = stories.length}
      </div>

      <div className="stories-scroll">
        {stories.length > 0 ? (
          stories.map((story) => (
            <div key={story.id} className='story-item' 
              onClick={() => navigate(`stories/${story.id}/${tot}`)}
            >
              <div className="gradient-border mx-1">
                <img src={story.profilePic} alt="profile_pic" className='story-dp rounded-circle' />
              </div>
              <small className='text text-truncate' style={{width:"50px"}}>
                {story.username}
              </small>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

    </div>
    </>
  )
}

export default Stories
