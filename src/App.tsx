import React from 'react';
import Home from "./pages/Home/components/Home"
import { Route, Routes} from "react-router-dom";
import  Header from "./pages/shared/Header/Header"
import { Popup } from './pages/shared/Popup/Popup';


function App() {
  return (
    <div className='global-container'>
     {/* <Popup /> */}
    <div className="container">
      <Header />
 <Routes>
  
  <Route path='/'  Component={Home}/>
 </Routes>
    </div>
    </div>
  );
}

export default App;
