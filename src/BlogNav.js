import React from 'react';

import blog from '/home/krish/blog/src/Images blog/bloglogo.png';

const BlogNav = () => {
  return (
    <>
  
<nav className="navbar navbar-expand-lg " style={{ background: '#00008B' }}>
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      {/* <span className="navbar-toggler-icon"></span> */}
    </button>
    <img src={blog} style={{ height: "40px" }} />

    <a className="navbar-brand " href="/">Blog Platform</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Post1" style={{ color: '#8B8000' }}>JavaScript</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/Post2" >Data structure</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/Post3" >Algorithms</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/Post4">Computer Network</a>
        </li>
        <li className="nav-item">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            
          </form>
        </li>
      </ul>
    </div>
  </div>
</nav>

{/* slide Recent Posts */}
<div class="d-flex  position-absolute top-10 end-0 bg-white ">
<span class="border">
<p class="p-2">Recent Posts</p>
<p><a class="link-offset-3 p-2" href="/Post1">JavaScript</a></p>
<p><a class="link-offset-3 p-2" href="/Post2">DataStructure</a></p>
<p><a class="link-offset-3 p-2" href="/Post3">Algorithms</a></p>
<p><a class="link-offset-3 p-2" href="/Post4">ComputerNetwork</a></p>

</span>


</div>
</>



    // <ul>
    //     <li><Link to="/post1">JavaScript</Link></li>
    //     <li><Link to="/post2">Data Structures</Link></li>
    //     <li><Link to="/post3">Algorithm</Link></li>
    //     <li><Link to="/post4">Computer Network</Link></li>
    // </ul>



  
  );
};

export default BlogNav;

