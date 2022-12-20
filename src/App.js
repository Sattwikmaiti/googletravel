
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import MapPage from "./Page/MapPage";



import Log from "./Page/Log";

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Log/>}></Route>

    

        <Route path="/Map/:id" element={<MapPage />}></Route>
        
      </Routes>
    </Router>
  );
};

export default App;
