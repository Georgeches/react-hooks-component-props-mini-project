import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blog={blogData}/>
      <About blog={blogData}/>
      {blogData.posts.map(post=><Article article={post}/>)}
    </div>
  );
}

export default App;
