import { Container, HeroBackground, HeroTitle, HeroSubtitle, HeroText, HomeButton } from "./styles";
import { useTranslation } from "react-i18next";

function Home() {

    const { t } = useTranslation()

    return(
        <>
            <HeroBackground>
                <div className="section-boxed flex-container h100">
                        <div className="flex-children-60">
                            <Container>
                                <HeroSubtitle className="mobileHidden">{t("hero.subtitle")}</HeroSubtitle>
                                <HeroTitle>{t("hero.title")}</HeroTitle>
                            </Container>
                            <Container>
                                <HeroText>{t("hero.text1")}</HeroText>
                            </Container>
                            <Container>
                                <HomeButton>{t("hero.button")}</HomeButton>
                            </Container>
                            
                        </div>
                </div>
            </HeroBackground>
        </>
    )
}

export default Home;