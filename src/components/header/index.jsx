import { HeaderPrimary, Container } from "./styles";
import Button from "../button";
import { useTranslation } from "react-i18next";

function Header1(){

    const { t } = useTranslation()

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