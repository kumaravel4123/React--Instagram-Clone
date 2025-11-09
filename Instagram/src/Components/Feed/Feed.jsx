import React from "react";
import "./Feed.css";
import Stories from './Stories/Stories';
import Post from './Posts/Post';

function Feed() {

     return (
    <>
    <div><Stories/></div>
    <div><Post/></div>
    </>
  )
}

export default Feed