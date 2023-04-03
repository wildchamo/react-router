import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {blogdata} from "./blogdata.js"


function BlogPost() {
  const {slug} = useParams();
  const navigation= useNavigate();

  const blogpost =blogdata.find(post => post.slug===slug)

  const returnToBlog = ()=>{
    navigation('/blog')
  }

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>
    </>
  );
}

export default BlogPost;
