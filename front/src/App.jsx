import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Mypage from "./pages/Mypage";
import EditProfile from "./pages/EditProfile";
import BoardWrite from "./pages/boardWrite";
import Board from "./pages/boardList";
import BoardEdit from "./pages/boardEdit";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="/board/write" element={<BoardWrite />} />
      <Route path="/board" element={<Board />} />
      <Route path="/board/edit/:id" element={<BoardEdit />} />
    </Routes>
  );
}
