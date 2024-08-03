import { Header } from "../components/Header/Header";
import { Banner } from "../components/Banner/Banner";
import imgBannerSobre from "../assets/img/banner2.png"

export function Sobre() {
    return (
        <>
            <Header />
            <Banner mensagem="Maranhão, meu tesouro, meu torrão!" 
            backgroundImage={imgBannerSobre} />
        </>
    )
}