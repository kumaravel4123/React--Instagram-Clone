import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import data from '../../../assets/js/data';
import "./ViewStory.css"

function ViewStory() {

  const { id, tot } = useParams();
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setStories(data.stories);
  }, []);

  useEffect(() => {
    const currentId = Number(id);
    const total = Number(tot);

    if (currentId > total || currentId <= 0) {
      navigate('/');
    }

  }, [id, tot, navigate]);

  const currentIndex = Number(id) - 1;
  const story = stories[currentIndex];

  return (
    <div>
      {story ? (
        <div className='view-story d-flex justify-content-center align-items-center'>

          <Link to={`/stories/${currentIndex}/${tot}`}>
            <i className="bi bi-arrow-left-circle mx-3 fs-1"></i>
          </Link>

          <img className='vh-100' src={story.imageUrl} alt="story-image" />

          <Link to={`/stories/${currentIndex + 2}/${tot}`}>
            <i className="bi bi-arrow-right-circle mx-3 fs-1"></i>
          </Link>

        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ViewStory;
