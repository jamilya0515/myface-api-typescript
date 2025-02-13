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
              element={
              <div>
              Sorry - that page doesn't exist
              </div>}/>
      </Routes>
      
    </BrowserRouter>
  </>
)
}

export default App
