import "./styles.css";
import React from "react";
import BlogContextDemo from "./BlogContextDemo.js";
const blogInfo = {
  React: {
    post: "learn usecontext hooks",
    author: "varun k"
  },
  Nodejs: {
    post: "node commands",
    author: "veena m"
  }
};
export const BlogContext = React.createContext(blogInfo);
export default function App() {
  return (
    <div className="App">
      <div>
        <h1>Hello </h1>
        <BlogContext.Provider value={blogInfo}>
          <BlogContextDemo />
        </BlogContext.Provider>
      </div>
    </div>
  );
}
