import React from 'react';
import java from '/home/krish/blog/src/Images blog/java.jpeg';
const Post1 = () => {
  return (
  
    <div className="card" style={{ width: '18rem' }}>
      <img src={java} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  );
};

export default Post1;
