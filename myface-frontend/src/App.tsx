import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.scss';
import PostList from './Components/PostList';
import UserList from './Components/UserList';

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/posts" 
              element={<PostList/>} />
        <Route path="/users"
              element={<UserList/>}/>
        <Route path="*"
              element={<div>
              <h2>Sorry - that page doesn't exist, try:</h2>
                <div >
                  <button><Link to="/posts">Link to Posts</Link></button>
                  <button><Link to="/users">Link to Users</Link></button>
                </div>
              </div>}/>     
      </Routes>  
    </BrowserRouter>
  </>
)
}

export default App
