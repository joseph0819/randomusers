import React from 'react';
import { useEffect } from "react";
import "./styles.css";
import axios from 'axios';

const App = () => {
  
  useEffect(() => {
 const axios = require('axios')

 axios.get('https://randomuser.me/api/')

 console.log(axios);
  
  },[]);
  return (
    <div className="App">
      <h1>welcome</h1>
    </div>
  );
};
export default App;
