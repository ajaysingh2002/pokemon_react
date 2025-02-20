// src/App.jsx
import React from "react";
import DataFetcher from "./Components/DataFetcher";

const App = () => {
  return (
    <div className="bg-blue-200 min-h-screen flex flex-col items-center">
      <h1 className="text-white text-3xl font-bold my-8 ">My React Vite App</h1>
      <DataFetcher />
    </div>
  );
};

export default App;
