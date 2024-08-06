import { Header } from "../components/Header/Header";
import { Banner } from "../components/Banner/Banner";
import { Footer } from "../components/Footer/Footer";
import imgBannerDestinos from "../assets/img/banner3.jpg";
import AreaPesquisa from "../components/AreaPesquisa/AreaPesquisa";

export function Destinos() {
    return (
        <>
            <Header />
            <Banner mensagem="Encontre seu próximo destino aqui!"
                backgroundImage={imgBannerDestinos} />
            <AreaPesquisa />
            <Footer />
        </>
    )
}
