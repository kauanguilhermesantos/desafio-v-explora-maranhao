import React from 'react';
import { useEffect, useState } from 'react';
import "./areaPesquisa.css";
import { FaSearch } from "react-icons/fa";
import Card from '../Card/Card';


import api from "../../api";





export default function AreaPesquisa() {

    let tiposFiltros = [];

    // api data
    const [atrativos, setAtrativo] = useState([]);
    // checkbox-verification
    const [isChecked, setIsChecked] = useState(false);
    // barra busca
    const [busca, setBusca] = useState('');
    // click
    const [isClicked, setIsClicked] = useState(false)

    async function getAtrativos() {
        const atrativosFromApi = await api.get("/atrativos");
        console.log(atrativosFromApi.data);
        setAtrativo(atrativosFromApi.data);
    }

    useEffect(() => {
        getAtrativos();
    }, []);

    // componente filtro
    const Filtro = ({ tipo }) => {
        return (
            <label className="filter" id="filtro">
                <input type="checkbox" 
                // checked={isChecked} onChange={ev => setIsChecked(ev.currentTarget.value)} 
                />
                <span class="checkbox-custom"></span>
                {tipo}
            </label>
        )
    }
    // mexendo end


    const atrativosFiltrados = atrativos.filter(atrativo => atrativo.nome.toLowerCase().startsWith(busca.toLowerCase()));


    return (
        <body>
            <form className="caixaBuscaContainer" role="search">
                <div className="caixaBusca">
                    <input
                        className="caixaBusca_input"
                        type="search"
                        placeholder="Pesquisar..."
                        value={busca}
                        onChange={ev => setBusca(ev.target.busca)}
                    />
                    <button
                        className="caixaBusca_button"
                        type="button"
                        // onClick={ev => setIsClicked(true)}
                        >
                        <FaSearch />
                    </button>
                </div>
            </form>
            <main>
                <aside>
                    <h3>Categorias</h3>
                    <ul className="list-filter">
                        {/* parque museu parque aventura natureza Eventos */}
                        <Filtro tipo={"Praia"} />
                        <Filtro tipo={"Museu"} />
                        <Filtro tipo={"Parque"} />
                        <Filtro tipo={"Aventura"} />
                        <Filtro tipo={"Natureza"} />
                        <Filtro tipo={"Evento"} />
                    </ul>
                </aside>
                <div>

                    { // cards dinamicos
                        atrativosFiltrados.map((props, key) =>
                            <Card nome={props.nome} tipo={props.tipo} descricao={props.descricao} cidade={props.cidade} />
                        )
                    }
                </div>
            </main>
        </body>
    )
}
