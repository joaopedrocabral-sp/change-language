import styled from "styled-components";

export const ChangeButton = styled.button `
    font-size: 18px;
    letter-spacing: 1px;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.blue.primary};
    padding: 8px 30px;
    -webkit-box-shadow: 0px 0px 36px -10px rgba(25, 76, 230,1);
    -moz-box-shadow: 0px 0px 36px -10px rgba(25, 76, 230,1);
    box-shadow: 0px 0px 36px -10px rgba(25, 76, 230,1);

    & img{
        width: 24px;
        margin-bottom: -6px;
        margin-right: 10px;
    }

    @media (max-width: 767px){
        font-size: 16px;
        padding: 8px 40px;
        margin-top: 15px;
    }
`