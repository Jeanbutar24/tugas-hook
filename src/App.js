import "./App.css";
import React, { useState } from "react";
// import Content from "./component/Content";
import ContentKw from "./component/contentKw";
function App() {
  return (
    <div className="container-fluid bg-warning">
      <div></div>
      <h1 className="text-center">Berita yang bukan Hoaks</h1>
      <ContentKw />
    </div>
  );
}

export default App;
