import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';

function ViewStory() {

  const { id, tot } = useParams();
  const [stories, setStories] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {

    // if (id > tot || id <= 0) {
    //   navigate('/');
    //   return;
    // } else {
    //   return;
    // }


    fetch(`http://localhost:3000/stories/${id}`)
      .then(data => data.json())
      .then(data => setStories(data))
      .catch(err => console.log(err))
  }, [id]);





  return (
    <div>

      {stories ?

        <div className='d-flex justify-content-center align-items-center'>
          <Link to={`http://localhost:5173/stories/${Number(id) - 1}/${tot}`}><i className="bi bi-arrow-left-circle mx-2"></i></Link>
          <img className='vh-100' src={stories.imageUrl} alt="story-image" />
          <Link to={`http://localhost:5173/stories/${Number(id) + 1}/${tot}`}><i className="bi bi-arrow-right-circle mx-2"></i></Link>
        </div> :

        <div>  Loading... </div>}

    </div>
  )
}

export default ViewStory