import React from 'react';
import BlogNav from './BlogNav';
import Posts from './Posts';

const App = () => {
  return (
<>
<BlogNav />
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
      
      <Posts />
    </div>
    </>
  );
};

export default App;
