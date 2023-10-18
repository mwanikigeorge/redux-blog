import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";
import SinglePost from "./pages/SinglePostPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DashboardPage />} />
        <Route exact path="/posts" element={<PostsPage />} />
        <Route exact path="/posts/:id" element={<SinglePost />} />
      </Routes>
    </Router>
  );
};

export default App;
