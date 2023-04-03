import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import HomePage from "../HomePage";
import Menu from "./Menu";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import LoginPage from "./LoginPage";
import LogOutPage from "./LogOutPage.jsx";

// /#/path

function App() {
  return (
    <div>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/blog" element={<Blog />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>

          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/logout" element={<LogOutPage/>}/>

          <Route path="*" element={<p>Not Found.</p>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
