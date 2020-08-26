import React, { useState, useEffect } from "react";
import "./App.css";
import NasaCard from './components/NasaCard';
import axios from 'axios';

function App() {
    // const [nasaData, setNasaData] = useEffect();
    // const moment = require('moment');
    // const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

    const [date, setDate] = useState(); 
    const [explanation, setExplanation] = useState();
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [copyright, setCopyright] = useState();
  
    useEffect(()=>{
        // axios.get(`https://api.nasa.gov/planetary/apod?api_key=sfSJmkALfA0b755hFJUEmj9ck7OdUaVBFuni91bt`)
        // axios.get(`https://api.nasa.gov/planetary/apod?api_key=sfSJmkALfA0b755hFJUEmj9ck7OdUaVBFuni91bt?date=${date}`)
        axios.get('https://api.nasa.gov/planetary/apod?api_key=fa5O3BQljsEyqfNarlgF5bX4t4TbK6vLbySh9i7H&')        
        // .then(res => setNasaData(res.data))
        .then(res => {
            setDate(res.data.date)
            setExplanation(res.data.explanation)
            setTitle(res.data.title)
            setImage(res.data.hdurl)
            setCopyright(res.data.copyright)
        })
        .catch(err=> console.log(err))
    // }, [date]);
    }, []);
    
    // const selectDifferentDate = e => {
    //     e.preventDefault();
    //     let calender = e.target.value;
    //     if(!moment(calender, 'YYYY-MM-DD').isValid()){
    //         console.log('please enter correct date format')
    //     } else {
    //         setDate(calender);
    //     }

    // }

    return (
        <div id="wrapper">
            <div id="container">
                <NasaCard 
                    date={date}
                    explanation={explanation}
                    title={title}
                    image={image}
                    copyright={copyright}
                    // selectDifferentDate={selectDifferentDate}

                    // date={nasaData.date}
                    // explanation={nasaData.explanation}
                    // title={nasaData.title}
                    // image={nasaData.hdurl}
                    // copyright={nasaData.copyright}
                    // selectDifferentDate={selectDifferentDate}
                    />
            </div>
        </div>
    );
}

export default App;

