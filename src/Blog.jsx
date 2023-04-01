import React from "react";
import { Link } from "react-router-dom";
import {blogdata} from "./blogdata.js"

function Blog() {
  return (
    <>
      <h1>BlogPage</h1>
      
      <ul>
        {blogdata.map(post => (
          <BlogLink post={post} />
        ))}
      </ul>
    </>
  );
}


function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

export default Blog;
