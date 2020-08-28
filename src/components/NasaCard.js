import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const NasaCard = (props)=>{    
    return (
        <div id="nasaCardContainer">
            <h2 id="title">
                <FontAwesomeIcon icon={faRocket}/>
                &nbsp;NASA Photo of the Day&nbsp;
                <FontAwesomeIcon icon={faRocket}/>
                <h3>{props.title}</h3>
            </h2>
            

            <div id="dateAndCopyrightDiv">
                <h2>{props.date}</h2>
                <h2>Image copyright: {props.copyright}</h2>
            </div>

            <img src={props.image} alt="nasa photo of the day"/>
            <p id="explanation">{props.explanation}</p>

            <div id="calendarDiv">
                <h4>see another date</h4>
                <form>
                    <input 
                        onChange={(e) => props.selectDifferentDate(e)}
                        id="date.picker"
                        type="date"
                        value={props.date}/>
                </form>
            </div>
        </div>
    )
}

export default NasaCard;