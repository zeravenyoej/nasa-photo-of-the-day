import React from 'react';
import NasaCardContainer from './NasaCardContainer';
import Title from './Title';
import Date from './Date';
import Img from './Img';
import Description from './Description';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fasRocket } from '@fortawesome/free-solid-svg-icons'


const NasaCard = (props)=>{
    return (
        <NasaCardContainer>
            {/* <FontAwesomeIcon icon="rocket" /> */}
            {/* {<i class="fas fa-rocket"></i>} */}
            <Title>{props.title}</Title>
            <Date>{props.date}</Date>
            <Img src={props.url}/>
            <Description>{props.explanation}</Description>
        </NasaCardContainer>
    )
}

export default NasaCard;