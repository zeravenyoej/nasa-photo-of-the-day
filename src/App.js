import React, { useState, useEffect } from "react";
import "./App.css";
import NasaCard from './components/NasaCard';
import axios from 'axios';

function App() {
    const moment = require('moment');
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
    const [explanation, setExplanation] = useState();
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [copyright, setCopyright] = useState();
  
    useEffect(()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=sfSJmkALfA0b755hFJUEmj9ck7OdUaVBFuni91bt&date=${date}`)
        .then(res => {
            setDate(res.data.date)
            setExplanation(res.data.explanation)
            setTitle(res.data.title)
            setImage(res.data.hdurl)
            setCopyright(res.data.copyright)
        })
        .catch(err=> console.log(err))
    }, [date]);
    
    const selectDifferentDate = e => {
        e.preventDefault();
        let calender = e.target.value;
        if(!moment(calender, 'YYYY-MM-DD').isValid()){
            console.log('please enter correct date format')
        } else {
            setDate(calender);
        }
    }

    return (
        <div id="wrapper">
            <div id="container">
                <NasaCard 
                    selectDifferentDate={selectDifferentDate}
                    date={date}
                    explanation={explanation}
                    title={title}
                    image={image}
                    copyright={copyright}/>
            </div>
        </div>
    );
}

export default App;

