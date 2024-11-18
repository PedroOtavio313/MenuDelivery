import styled from "styled-components";

import backImg from '../../assets/sushi_back.png'

export const Container = styled.div`
    height: 260px;
    width: 1120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin: 0 auto;
    margin-top: 164px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    padding: 20px;
    position: relative;
    overflow: visible;
    border-radius: 10px;
    border: 1px solid white;
    grid-template-areas: 
        "header" "backgroundLateral"
        
        "foods" "footer"
        
    ;



    > div {
        z-index: 1;
    }

    h2{
        font-size: 40px;
        margin-bottom: 10px;        
    }

    h3{
        font-size: 20px;
    }

    h2, h3 {
        margin-right: 100px;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    `

export const BackgroundLateral = styled.div`
    background: url(${backImg}) no-repeat center;
    background-size: auto;
    position: absolute;
    bottom: 0px;
    left: -150px;
    height: 423px;
    width: 707px;
    grid-area: backgroundLateral;
    `


export const Foods = styled.div`
    grid-area: foods;
    `


export const Footer = styled.div`
    grid-area: footer;
    `