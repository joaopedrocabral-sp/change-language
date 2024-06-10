import { HeaderPrimary, Container } from "./styles";
import Button from "../button";
import { useTranslation } from "react-i18next";

function Header1(){

    const { 
        t,
        i18n: {changeLanguage, language} 
    } = useTranslation()

    function languageVerification () {
        if(language.includes("en") & language != "en-US"){
            changeLanguage("en-US")
            language
        } else if (language.includes("pt") & language != "pt-BR"){
            changeLanguage("pt-BR")
            language
        } else {
            language
        }
    }

    languageVerification()

    return(

        <HeaderPrimary>
            <div className="header-boxed header-flex-container">

                <Container>
                    <h1>{t("header.title")}</h1>
                </Container>
                <Container>
                    <Button />
                </Container>

            </div>
        </HeaderPrimary>

    )
}

export default Header1;