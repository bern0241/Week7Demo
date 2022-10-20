import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Header from './Header';
import Card from './Card';

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
          <Card data={data}/>
        </Container>
      </header>
    </div>
  );
}

export default App;
