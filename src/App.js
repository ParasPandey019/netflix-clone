import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import LoginPage from './components/loginpage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<HomeScreen />}></Route>
      </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
