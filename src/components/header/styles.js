import styled from "styled-components"

export const HeaderPrimary = styled.header `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 12vh;

    -webkit-box-shadow: 0px 10px 32px -10px rgba(25, 76, 230,0.3);
    -moz-box-shadow: 0px 10px 32px -10px rgba(25, 76, 230,0.3);
    box-shadow: 0px 10px 32px -10px rgba(25, 76, 230,0.3);

    @media (max-width: 767px){
        min-height: 25vh;
    }
`

export const Container = styled.div`
    display: flex;
    gap: 40px;

    & a{
        font-weight: 500;
        font-family: "Montserrat"
    }
`