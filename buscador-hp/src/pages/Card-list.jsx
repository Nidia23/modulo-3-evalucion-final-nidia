import { useState, useEffect } from "react"
import Cards from "../components/Cards";

const CardList = () =>{
    const[string, setString] = useState('')
    const[card, setCard] = useState([])

    useEffect(() =>{
        const CardApi = async () =>{
            try{
                const response = await fetch (`https://hp-api.onrender.com/api/characters`)
                if(!response.ok){
                    throw new Error ('Personaje no encontrado')
                }
                const data = await response.json()
                    setCard(data)
            }catch(error){
                console.log(error)}
        }

        CardApi();
    }, [string]);


    return(
        <div>
            <input type="text"
            placeholder="Harry Potter"
            value={string}
            onChange={(event)=> setString(event.target.value)}></input>
            <div>
            {card.map((cards) =>(

                <Cards
                    image={cards.image}
                    name={cards.name}
                    gender={cards.gender}
                    house={cards.house}
                    species={cards.species}
                />
                
            )
            
        )}
        </div>
        </div>

    );
};

export default CardList;