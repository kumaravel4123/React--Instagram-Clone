import React, { useEffect, useState } from 'react'
import "./Post.css";

function Post() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
    .then((data) => data.json())
      .then(data => setPosts(data))
      .catch(err => console.log(err))
  },[]);

  return (
    
      <div className='posts d-flex justify-content-center'>
        {posts.length > 0 ? (
          <div className=''>
              { posts.map((post)=>(
                <div key={post.id}>
                      <div className='d-flex  my-3'>
                        <img className='dp rounded-circle mx-2' src={post.profilePic} alt="" />
                        <h6 style={{margin:"8px 0px 0px 3px"}}>{post.username}</h6>
                      </div>
                      <div className='img d-flex justify-content-center'>
                      <img className='image ' src={post.imageUrl} alt="" />
                      </div>
                      <div>
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-send"></i>
                      </div>
                      <div>
                        <strong> {post.likes} Likes </strong>
                        <div>
                          {post.caption}
                        </div>
                        
                      </div>
                </div>
              ))}
          </div>
        ) : (
          <div>Loading...</div>
        )
        }
      </div>
    
  )
}

export default Post