import { Container, HeroBackground, HeroTitle, HeroSubtitle, HeroText, HomeButton } from "./styles";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import heroImageUrl from "../../assets/images/multi-language.jpg";

function Home() {
    
    const { t } = useTranslation()

    useEffect(() => {
        document.getElementById("hero-img").style.backgroundImage = `linear-gradient(to bottom, rgb(6, 41, 148, 0.7), rgb(0, 0, 0, 1)), url("${heroImageUrl}")`;
         }, []);
    
    return(
        <>
            <HeroBackground id="hero-img">
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