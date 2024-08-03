import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Slider } from "./components/Slider/Slider";
import { Footer } from './components/Footer/Footer';

function Home() {
    return (
        <>
            <Header />
            <Banner mensagem = "Encontre aqui o destino da sua próxima aventura!"/>
            <h2 class="destinosHome">Destinos mais procurados</h2>
            <Slider/>
            <Footer />
        </>
    )
}