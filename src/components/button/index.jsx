import { ChangeButton } from "./styles";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import usFlag from "../../assets/images/us.svg";
import brFlag from "../../assets/images/brasil.svg";

function Button(){

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
        
    const [currentLanguage, setCurrentLanguage] = useState(languageVerification())

    const [currentFlag, setCurrentFlag] = useState(currentLanguage === "en-US" ? brFlag : usFlag)

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en-US" ? "pt-BR" : "en-US"
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)

        const newFlag = currentFlag === usFlag ? brFlag : usFlag
        setCurrentFlag(newFlag)
    }

    return(
        <ChangeButton type="button" onClick={handleChangeLanguage}><img src={currentFlag} alt="" />{t("languageButton")}</ChangeButton>
    )
}

export default Button;