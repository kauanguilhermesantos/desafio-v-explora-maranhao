import { Header } from "../components/Header/Header";
import { Banner } from "../components/Banner/Banner";
import imgBannerSobre from "../assets/img/banner2.png"
import { ParagrafoSobre } from "../components/ParagrafoSobre/ParagrafoSobre";
import { CardSobre } from "../components/CardSobre/CardSobre";
import imagem1 from "../assets/img/1.png";
import imagem2 from "../assets/img/2.png";
import imagem3 from "../assets/img/3.png";
import imagem4 from "../assets/img/4.png";
import imagem5 from "../assets/img/5.png";
import imagem6 from "../assets/img/6.png";
import imagem7 from "../assets/img/7.png";
import imagem8 from "../assets/img/8.png";
import { Footer } from "../components/Footer/Footer"

export function Sobre() {
    return (
        <>
            <Header />
            <Banner mensagem="Maranhão, meu tesouro, meu torrão!" 
            backgroundImage={imgBannerSobre} />
            <ParagrafoSobre titulo="Explore o Maranhão: O Destino dos Seus Sonhos Está Aqui!"
            texto="O Maranhão é mais do que um destino. É uma oportunidade de viver uma experiência incrível que você vai querer compartilhar <br/> com todos. Não fique de fora dessa, venha para o Maranhão e descubra um mundo de possibilidades!" />
            <CardSobre titulo="Aventura, Cultura e Beleza Natural Esperam Por Você no Maranhão!" 
            texto="Procurando uma viagem fora do comum? O Maranhão oferece <strong>belezas naturais</strong> deslumbrantes, rica <strong>cultura</strong> e sabores irresistíveis, prometendo transformar suas férias em uma <strong>experiência inesquecível</strong>." 
            imagem={imagem1}/>
            <CardSobre titulo="Prepare-se para se Encantar com a Magia do Maranhão!"
            texto="O Maranhão oferece uma <strong>experiência única</strong> com <strong>aventuras</strong> diárias, <strong>beleza natural</strong>, rica tradição e sabores distintos. Se ainda não conhece, é hora de embarcar em uma <strong>viagem extraordinária</strong>."
            imagem={imagem2} />
            <CardSobre titulo="A Natureza em Seu Estado Mais Puro e Deslumbrante!"
            texto="O Maranhão é ideal para quem busca imersão na natureza, com paisagens de <strong>dunas</strong> e <strong>lagoas</strong> que parecem de sonho. Caminhar por essas belezas oferece aventuras e momentos de contemplação, tornando cada instante da viagem uma experiência única."
            imagem={imagem3}/>
            <CardSobre titulo="Vivencie uma Cultura Rica e Vibrante!"
            texto="A cultura do Maranhão é <strong>vibrante</strong> e <strong>dinâmica</strong>, com festivais coloridos, música e dança que enchem as ruas. Cada evento e tradição oferece uma rica <strong>história</strong>, permitindo que você mergulhe em uma atmosfera exuberante e contagiante que celebra o espírito local."
            imagem={imagem4}/>
            <CardSobre titulo="Sabores Que Contam Histórias: A Gastronomia Maranhense!"
            texto="A culinária maranhense é um festim para os sentidos, oferecendo <strong>sabores</strong> exóticos e acolhedores. Cada refeição é uma experiência sensorial, combinando ingredientes frescos e técnicas tradicionais com <strong>criatividade</strong>, tornando cada prato uma obra de <strong>arte culinária</strong>."
            imagem={imagem5}/> 
            <CardSobre titulo="Momentos de Tranquilidade e Relaxamento ao Seu Alcance!"
            texto="Se você busca um escape do cotidiano, o Maranhão é o <strong>refúgio</strong> ideal para encontrar <strong>paz</strong> e <strong>relaxamento</strong>. Desconecte-se da rotina e desfrute de <strong>tranquilidade</strong> em ambientes que convidam ao <strong>descanso</strong> e à introspecção, renovando-se e se inspirando com as belezas naturais do lugar."
            imagem={imagem6}/> 
            <CardSobre titulo="Uma Experiência de Viagem Que Vai Mudar Sua Vida!"
            texto="O Maranhão é uma jornada para descobrir o melhor da vida, oferecendo aventuras emocionantes, <strong>cultura</strong> rica e <strong>gastronomia</strong> deliciosa. Cada momento é uma oportunidade para criar <strong>memórias inesquecíveis</strong>, tocando seu coração e inspirando sua alma com suas <strong>maravilhas naturais</strong> e experiências únicas."
            imagem={imagem7}/> 
            <CardSobre titulo="Não Perca a Oportunidade de Explorar o Maranhão!"
            texto="repare suas malas e comece a planejar uma <strong>viagem inesquecível</strong> ao Maranhão. Com braços abertos e corações calorosos, o Maranhão está pronto para <strong>recebê-lo</strong>. A experiência dos seus <strong>sonhos</strong> está ao seu alcance!"
            imagem={imagem8}/> 
            <ParagrafoSobre texto="A aventura está te chamando, e ela começa no Maranhão! <br/> Explore, Experimente e Encante-se com o Maranhão!" />
            <Footer />
        </>
    )
}