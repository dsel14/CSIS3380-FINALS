import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './comp/main.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
