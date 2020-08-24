import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';



const NasaCard = (props)=>{

    const NasaCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `;


    const Date = styled.h2`
    font-family: 'Courgette', cursive;
    font-size: 4vh;
    color: #989BC1;
    text-shadow: 1px 1px #0A0D42;
    `;

    const Description = styled.p`
    line-height: 1.6;
    font-family: 'Montserrat', sans-serif;
    margin-top: 8%;
    `;

    const Img = styled.img`
    width: 75%;
    // height: 90vh;
    border-radius: 10%;
    `;

    const Title = styled.h2`
    font-family: 'Libre Baskerville', serif;
    color: #6D71A9;
    font-size: 8vh;
    text-shadow: 2px 2px #0A0D42;
    text-align: center;
    `;
    
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