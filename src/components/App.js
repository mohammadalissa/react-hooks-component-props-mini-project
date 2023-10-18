
import React from "react";
import blogData from "../data/blog";
import Header from "./Header"; // Corrected component name
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} /> {/* Corrected component name */}
      <About about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;