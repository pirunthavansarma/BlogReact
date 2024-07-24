import React from 'react';
// import java from '/home/krish/blog/src/Images blog/java.jpeg';
import java from '/home/krish/blog/src/Images blog/javascript-illustration.png';
// import React, { useState } from 'react';

const Post1 = () => {

  return (
  
    <div className="card" style={{ width: '40rem' }}>
      <img src={java} className="card-img-top" alt="JS" />
      <div className="card-body">
        <h5 className="card-title">JavaScript</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className="btn btn-warning">Read More</button>
        

      </div>
      
    </div>


  );
};

export default Post1;
