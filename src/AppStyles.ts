import styled from "styled-components";
import img from './assets/images/bg.jpg'

export const Container = styled.div `
    height: 100vh;
    width: 100%;
    background-image:url(${img});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#fff;
    text-shadow: 1px 1px 3px #000;
    overflow: hidden;
    
`;

export const Info = styled.div `
    width: 100%;
    text-align: center;
    h1{
     font-size: 8rem;
     margin-bottom: 10px;
    }
    h2{
     font-size: 3rem
    }
    @media (max-width: 500px) {
        h1{
     font-size: 3.2rem
    }
    h2{
     font-size: 2.5rem
    }  
    }
`;

export const Footer = styled.footer`
    position: absolute;
    bottom: 10px;
    font-size: 1.2rem;
    text-align: center;
    @media (max-width: 500px) {
        font-size: 1rem;
    }
`;