import React from 'react';

const BlogNav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Blog</a>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">JavaScript</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Data structureo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Algo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Computer Network</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>



    // <ul>
    //     <li><Link to="/post1">JavaScript</Link></li>
    //     <li><Link to="/post2">Data Structures</Link></li>
    //     <li><Link to="/post3">Algorithm</Link></li>
    //     <li><Link to="/post4">Computer Network</Link></li>
    // </ul>



  
  );
};

export default BlogNav;
