import React, { useState, useEffect } from "react";
import "./App.css";
import NasaCard from './components/NasaCard';
import axios from 'axios';
import styled from 'styled-components'
import Container from './components/Container';


function App() {

  const [date, setDate] = useState(); 
  const [explanation, setExplanation] = useState();
  const [title, setTitle] = useState();
  const [url, setURL] = useState();
  
  useEffect(()=>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=fa5O3BQljsEyqfNarlgF5bX4t4TbK6vLbySh9i7H&')
    .then(res => {
      console.log(res)
      setDate(res.data.date)
      setExplanation(res.data.explanation)
      setTitle(res.data.title)
      setURL(res.data.url)
    })
    .catch(err=> console.log(err));
  }, []);
  

  return (

    <Container>
      <NasaCard 
        date={date}
        explanation={explanation}
        title={title}
        url={url}
      />
    </Container>
  );
}

export default App;

