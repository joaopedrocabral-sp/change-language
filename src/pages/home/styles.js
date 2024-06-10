import styled from "styled-components";

export const Container = styled.div `
    margin: 30px 0;
    padding: 0;

    @media (max-width: 767px){
        margin: 15px 0;
    }
`

export const HeroBackground = styled.div `
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 88vh;

    @media (max-width: 767px) {
        height: 70vh;   
    }

`

export const HeroTitle = styled.h2 `
    color: ${props => props.theme.color.white};
    text-transform: capitalize;
`

export const HeroSubtitle = styled.h3 `
    font-size: 18px;
    text-transform: uppercase;
    color: ${props => props.theme.color.white};
    margin-bottom: 0;
`

export const HeroText = styled.p `
    color: ${props => props.theme.color.white};
`

export const HomeButton = styled.button`
    background-color: ${props => props.theme.color.blue.primary};
    color: ${props => props.theme.color.white};
    padding: 12px 50px;
    font-size: 20px;

    -webkit-box-shadow: 0px 0px 36px -10px rgba(240, 240, 240, .4);
    -moz-box-shadow: 0px 0px 36px -10px rgba(240, 240, 240, .4);
    box-shadow: 0px 0px 36px -10px rgba(240, 240, 240, .4);

    &:hover{
        color: ${props => props.theme.color.white};
        background-color: ${props => props.theme.color.blue.secondary};
    }

    @media (max-width: 767px) {
        padding: 10px 30px;
        font-size: 18px;
    }

`