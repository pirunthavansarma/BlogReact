import React from 'react';
import data from '/home/krish/blog/src/Images blog/dataStr.jpeg';

const Post2 = () => {
  return (
<div className="card" style={{ width: '40rem' , marginTop:"20px" }}>
      <img src={data} className="card-img-top" alt="DATA" />
    <div className="card-body">
      <h5 className="card-title">DATA Structures</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-warning">Read More</a>
    </div>
  </div>

)};

export default Post2;
