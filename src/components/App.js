import React from "react";
import { Routes, Route } from "react-router-dom";
import Up from "./Up/Up";
import Info from "./Info/Info";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Up />
              <Info />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
