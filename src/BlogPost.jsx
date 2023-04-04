import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata.js";
import { useAuth } from "./auth.jsx";

function BlogPost() {
  const { slug } = useParams();
  const navigation = useNavigate();

  const auth = useAuth();

  const blogpost = blogdata.find((post) => post.slug === slug);

  const canDelete =
    auth.user?.isAdmin || blogpost.author === auth.user?.username;

  const returnToBlog = () => {
    navigation("/blog");
  };

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>

      {canDelete && <button>Eliminar blogpost</button>}
    </>
  );
}

export default BlogPost;
