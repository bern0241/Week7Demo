import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Header from './Header';
import Card from './Card';
import {Routes, Route} from 'react-router-dom';
import Women from './Women'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
    .then (resp => resp.json())
    .then(data => setData(data))
    .catch(err => console.log(err))

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Card data={data} />} />
            <Route path="/women" element={<Women data={data} />}/>
          </Routes>
        </Container>
      </header>
    </div>
  );
}

export default App;
