import { createGlobalStyle } from "styled-components";

const MyGlobalStyles = createGlobalStyle`

html{
        scroll-behavior: smooth;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        gap: 30px;
        font-family: "Poppins";
        color: ${props => props.theme.color.blue.primary};
        text-align: center;
        transition: all .5s;
    }
    body{
        background-color: ${props => props.theme.color.white};
        margin: 0 auto;
    }
    div.header-boxed{
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
        padding: 30px 0;
    }
    div.section-boxed{
        max-width: 1300px;
        margin: 0 auto;
        padding: 100px 0;
    }
    div.flex-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    div.header-flex-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    div.flex-children-100{
        width: 100%;
    }
    div.flex-children-90{
        width: 90%;
    }
    div.flex-children-80{
        width: 80%;
    }
    div.flex-children-70{
        width: 70%;
    }
    div.flex-children-60{
        width: 60%;
    }
    div.flex-children-50{
        width: 50%;
    }
    div.flex-children-40{
        width: 40%;
    }
    div.flex-children-30{
        width: 30%;
    }
    div.flex-children-20{
        width: 20%;
    }
    div.flex-children-10{
        width: 10%;
    }
    .h100{
        height: 100%;
    }
    h1{
        font-family: "Montserrat";
        font-size: 26px;
        font-weight: 900;
        text-transform: uppercase;
    }
    h2{
        font-family: "Montserrat";
        font-size: 45px;
        font-weight: 900;
        margin-bottom: 30px;
    }
    p{  
        font-family: "Poppins";
        font-size: 18px;
        font-weight: 500;
    }
    button{
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 700;
        border-radius: 100px;
    }

    @media (max-width: 767px){
        div.header-boxed{
            padding: 20px;
        }
        div.header-flex-container{
            flex-direction: column;
            gap: 10px;
        }
        div.section-boxed{
            max-width: 1300px;
            margin: 0 auto;
            padding: 50px 20px;
        }   
        div.flex-children-60{
        width: 100%;
        }
        h1{
            font-family: "Montserrat";
            font-size: 20px;
            font-weight: 900;
            text-transform: uppercase;
        }
        h2{
            font-family: "Montserrat";
            font-size: 35px;
            font-weight: 900;
            margin-bottom: 30px;
        }
        p{  
            font-family: "Poppins";
            font-size: 16px;
            font-weight: 500;
        }
    }

`

export default MyGlobalStyles;