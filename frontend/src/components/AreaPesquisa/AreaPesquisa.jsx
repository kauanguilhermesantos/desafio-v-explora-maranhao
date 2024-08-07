import React from 'react';
import { useEffect, useState } from 'react';
import "./areaPesquisa.css";
import { FaSearch } from "react-icons/fa";
import Card from '../Card/Card';


import api from "../../api";


export default function AreaPesquisa() {

    const tiposFiltros = ['Praia', 'Museu', 'Parque', 'Natureza', 'Aventura', 'Evento'];


    // api data
    const [atrativos, setAtrativo] = useState([]);
    // barra busca
    const [busca, setBusca] = useState('');
    //
    // const [selectedFilters, setSelectedFilters] = useState([]);
    // const [atrativosComFiltro, setAtrativosComFiltro] = useState(atrativos);
    //
    // const handleFilterButtonClick = (selectedType) => {
    //     if (selectedFilters.includes(selectedType)) {
    //         let filters = selectedFilters.filter(el => el !== selectedType);
    //         setSelectedFilters(filters);
    //     } else {
    //         setSelectedFilters([...selectedFilters, selectedType]);
    //     }
    //
    // }

    async function getAtrativos() {
        const atrativosFromApi = await api.get("/atrativos");
        console.log(atrativosFromApi.data);
        setAtrativo(atrativosFromApi.data);
    }

    useEffect(() => {
        getAtrativos();
        // filterAtrativos();
    }, [/* selectedFilters */]);


    // const filterAtrativos = () => {
    //     if (selectedFilters.length > 0) {
    //         let tempAtrativos = selectedFilters.map(selectedCategory => {
    //             let temp = atrativosFiltrados.filter(atrativo => atrativo.tipo === selectedCategory);
    //             return temp;
    //         });
    //         setAtrativosComFiltro(tempAtrativos.flat());
    //     } else {
    //         setAtrativosComFiltro([...atrativosFiltrados])
    //     }
    // }

    // componente filtro
    const Filtro = ({ tipo }) => {
        return (
            <label className="filter">
                <input type="checkbox" /* onClick={() => handleFilterButtonClick(tipo)} */ />
                <span class="checkbox-custom"></span>
                {tipo}
            </label>
        )
    }

    // mexendo end


    const atrativosFiltrados = atrativos.filter(atrativo => atrativo.nome.toLowerCase().includes(busca.toLowerCase()));


    return (
        <body>
            <form className="caixaBuscaContainer" role="search">
                <div className="caixaBusca">
                    <input
                        className="caixaBusca_input"
                        type="search"
                        placeholder="Pesquisar..."
                        value={busca}
                        onChange={ev => setBusca(ev.target.value)}
                    />
                    <button
                        className="caixaBusca_button"
                        type="button"
                        onClick={ev => setBusca(ev.target.value)}
                    >
                        <FaSearch />
                    </button>
                </div>
            </form>
            <main>
                <aside>
                    <h3>Categorias</h3>
                    <ul className="list-filter">

                        { // filtros
                            tiposFiltros.map((filtro, key) =>
                                <Filtro tipo={filtro} key={key} />
                            )
                        }

                    </ul>
                </aside>
                <div>
                    { // cards dinamicos
                        atrativosFiltrados.map((props, key) =>
                            <Card key={key} nome={props.nome} tipo={props.tipo} descricao={props.descricao} cidade={props.cidade} />
                        )
                    }
                </div>
            </main>
        </body>
    )
}
