import { useEffect, useState } from "react";
import { useLocation, matchPath } from "react-router-dom"

const CharDetail = () => {
    // Con el hook useLocation primero obtengo la ruta actual
    const { pathname } = useLocation();
    // Con el matchPath compruebo si la ruta actual coincide con /product/:productId
    const routeData = matchPath('characters/:id', pathname);

    const [character, setCharacter] = useState()

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch("https://hp-api.onrender.com/api/characters")
            const data = await response.json();
                setCharacter(data.items.find(e => e.id === routeData.params.id));
        };
        loadData();
    }, [routeData])
    return <div>{character ? <div>Detalle de la camiseta {character.id}</div> : <div>Camiseta no encontrada</div>}</div>
}

export default CharDetail