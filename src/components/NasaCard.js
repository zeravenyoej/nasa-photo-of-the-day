import React from 'react';
import NasaCardContainer from './NasaCardContainer';
import Title from './Title';
import Date from './Date';
import Img from './Img';
import Description from './Description';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';


const NasaCard = (props)=>{
    return (
        <NasaCardContainer>
            <Title><FontAwesomeIcon icon={faRocket} />{props.title}<FontAwesomeIcon icon={faRocket} /></Title>
            <Date>{props.date}</Date>
            <Img src={props.url}/>
            <Description>{props.explanation}</Description>
        </NasaCardContainer>
    )
}

export default NasaCard;