import React from 'react';
import alg from '/home/krish/blog/src/Images blog/algothiram.png';


const Post3 = () => {
  return (
      <div className="card" style={{ width: '40rem', marginTop:"20px"  }}>
    <img src={alg} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-warning">Read More</a>
    </div>
  </div>
  );
};

export default Post3;
