import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
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
              Sorry - that page doesn't exist, try:
                <button><a href="http://localhost:5173/posts">Link to Posts</a></button> 
                <button><a href="http://localhost:5173/users">Link to Users</a></button>
              </div>}/>
      </Routes>
      
    </BrowserRouter>
  </>
)
}

export default App
