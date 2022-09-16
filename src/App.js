import React from "react";
import "./App.css";
import Dynamic from "./components/Dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
import PaginationDynamic from "./components/PaginationDynamic";

function App() {
  return (
    <div className="App">
      <Dynamic />
      <PaginationDynamic />
    </div>
  );
}

export default App;
