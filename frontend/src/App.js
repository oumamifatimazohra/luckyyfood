import React from 'react';
import Homescreen from './screen/Homescreen';
import { BrowserRouter,Route,Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Homescreen />}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
