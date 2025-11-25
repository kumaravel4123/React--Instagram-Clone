import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import data from '../../../assets/js/data';

function ViewStory() {

  const { id, tot } = useParams();
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load local data
    setStories(data.stories);
  }, []);

  // convert id to number
  const currentIndex = Number(id) - 1;

  // get current story
  const story = stories[currentIndex];

  return (
    <div>
      {story ? (
        <div className='d-flex justify-content-center align-items-center'>

          {/* Left Arrow */}
          <Link to={`/stories/${currentIndex}/${tot}`}>
            <i className="bi bi-arrow-left-circle mx-3 fs-1"></i>
          </Link>

          {/* Story Image */}
          <img className='vh-100' src={story.imageUrl} alt="story-image" />

          {/* Right Arrow */}
          <Link to={`/stories/${currentIndex + 2}/${tot}`}>
            <i className="bi bi-arrow-right-circle mx-3 fs-1"></i>
          </Link>

        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default ViewStory;


// import React, { useEffect, useState } from 'react'
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import data from '../../../assets/js/data';


// function ViewStory() {

//   const { id, tot } = useParams();
//   const [stories, setStories] = useState(null);

//   const navigate = useNavigate();

//   useEffect(() => {

//     // if (id > tot || id <= 0) {
//     //   navigate('/');
//     //   return;
//     // } else {
//     //   return;
//     // }


//     setStories(data.stories);
//   }, [id]);





//   return (
//     <div>

//       {stories ?

//         <div className='d-flex justify-content-center align-items-center'>
//           <Link to={`http://localhost:5173/stories/${Number(id) - 1}/${tot}`}><i className="bi bi-arrow-left-circle mx-2"></i></Link>
//           <img className='vh-100' src={stories.imageUrl} alt="story-image" />
//           <Link to={`http://localhost:5173/stories/${Number(id) + 1}/${tot}`}><i className="bi bi-arrow-right-circle mx-2"></i></Link>
//         </div> :

//         <div>  Loading... </div>}

//     </div>
//   )
// }

// export default ViewStory

