import React from "react";
import {Route, Routes} from "react-router-dom";
import NotFound from "../../pages/NotFound.jsx";
import Chat from "../../pages/Chat.jsx";
import Vocab from "../../pages/Vocab.jsx";
import Home from "../../pages/Home.jsx";

function RouterSwitcher() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/vocab" element={<Vocab />} />
      </Routes>
    </>
  );
}
export default RouterSwitcher;