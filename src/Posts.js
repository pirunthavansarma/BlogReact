import React from 'react';
import Post1 from './Post1';
import Post2 from './Post2';
import Post3 from './Post3';
import Post4 from './Post4';

const Posts = () => {
  return (
    <div className='bg-info-subtle' style={{display:"flex-column",paddingLeft:"200px",height: "100vh" , paddingTop:"20px"}}>
      <Post1 />
      <Post2 />
      <Post3 />
      <Post4 />
    </div>
  );
};

export default Posts;
