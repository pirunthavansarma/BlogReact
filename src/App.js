import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogNav from './BlogNav';
import Posts from './Posts';
import Post1 from './Post1';
import Post2 from './Post2';
import Post4 from './Post4';
import Post4 from './Post4';
import Post3 from './Post3';

const App = () => {
  return (

    <>
    
    <BlogNav />
    <Router>
        <Routes >
        <Route path="/BlogReact" element={<Posts/>} />
          <Route path="/BlogReact/Post1" element={<Post1 />} />
          <Route path="/BlogReact/Post2" element={<Post2 />} />
          <Route path="/BlogReact/Post3" element={<Post3 />} />
          <Route path="/BlogReact/Post4" element={<Post4 />} />
        </Routes>
    </Router>
    </>
  );
};

export default App;
