import { ChangeButton } from "./styles";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Button(){

    const { 
        t,
        i18n: {changeLanguage, language} 
    } = useTranslation()
        
    const [currentLanguage, setCurrentLanguage] = useState(language)
    const [currentFlag, setCurrentFlag] = useState(currentLanguage === "en-US" ? "./src/assets/images/brasil.svg" : "./src/assets/images/us.svg")

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en-US" ? "pt-BR" : "en-US"
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)

        const newFlag = currentFlag === "./src/assets/images/us.svg" ? "./src/assets/images/brasil.svg" : "./src/assets/images/us.svg"
        setCurrentFlag(newFlag)
    }

    return(

        <ChangeButton type="button" onClick={handleChangeLanguage}><img src={currentFlag} alt="" />{t("languageButton")}</ChangeButton>

    )
}

export default Button;