import logo from './logo.svg';
import './App.css';
import Image from './components/Image.js'
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [imageId, setImageId] = useState(16)

  return (
    <div className="App">
      <img src="./images/Dragon.png" alt="My Image" />
    </div>
  );
}

export default App;
