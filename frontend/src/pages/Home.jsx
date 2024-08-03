import { Header } from "../components/Header/Header";
import { Banner } from "../components/Banner/Banner";
import { Slider } from "../components/Slider/Slider";
import { Footer } from '../components/Footer/Footer';
import imgBannerHome from "../assets/img/banner1.png"

export function Home() {
    return (
        <>
            
                <Header />
                <Banner mensagem="Encontre aqui o destino da sua próxima aventura!"
                backgroundImage={imgBannerHome} />
                <h2 className="destinosHome">Destinos mais procurados</h2>
                <Slider />
                <Footer />
            
        </>
    )
}