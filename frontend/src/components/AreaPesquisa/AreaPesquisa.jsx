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
    // filters
    const [selectedFilters, setSelectedFilters] = useState([]);
    // const [atrativosComFiltro, setAtrativosComFiltro] = useState(atrativos);


    // function para pegar resultado da requisição da api
    async function getAtrativos() {
        const atrativosFromApi = await api.get("/atrativos");
        console.log(atrativosFromApi.data);
        setAtrativo(atrativosFromApi.data);
    }

    useEffect(() => {
        getAtrativos();
    }, [selectedFilters]);


    const handleCheckboxChange = (category) => {
        setSelectedFilters((prevSelectedFilters) =>
            prevSelectedFilters.includes(category)
                ? prevSelectedFilters.filter((c) => c !== category)
                : [...prevSelectedFilters, category]
        );
    };


    const atrativosFiltrados = atrativos.filter(atrativo => atrativo.nome.toLowerCase().includes(busca.toLowerCase()));

    const filteredItems = atrativosFiltrados.filter((item) =>
        selectedFilters.length === 0 || selectedFilters.includes(item.tipo)
    );


    // componente filtro
    const Filtro = ({ tipo }) => {
        return (
            <label className="filter">
                <input
                    type="checkbox"
                    value={tipo}
                    onChange={() => handleCheckboxChange(tipo)}
                />
                <span class="checkbox-custom"></span>
                {tipo}
            </label>
        )
    }



    return (
        <body>
            <form className="caixaBuscaContainer" role="search">
                <div className="caixaBusca">
                    <input
                        id="conteudo-busca"
                        className="caixaBusca_input"
                        type="search"
                        placeholder="Pesquisar..."
                    />
                    <button
                        className="caixaBusca_button"
                        type="button"
                        onClick={() => {
                            const searchContent = document.getElementById('conteudo-busca').value;
                            // console.log(searchContent);
                            setBusca(searchContent);
                        }}
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
                            tiposFiltros.map((tipoFiltro, key) =>
                                <Filtro tipo={tipoFiltro} key={key} />
                            )
                        }

                    </ul>
                </aside>
                <div>
                    { // cards dinamicos
                        filteredItems.map((props, key) =>
                            <Card
                                key={key}
                                nome={props.nome}
                                tipo={props.tipo}
                                descricao={props.descricao}
                                cidade={props.cidade}
                                mapa={props.mapa}
                                imagemSource={props.imagemSource}
                            />
                        )
                    }
                </div>
            </main>
        </body>
    )
}
