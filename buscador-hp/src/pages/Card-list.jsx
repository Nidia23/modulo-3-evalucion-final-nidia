import React,{ useState, useEffect } from "react"
import Cards from "../components/Cards"
import { Link } from 'react-router-dom'

//Lista de cartas que ve el usuario
const CardList = () =>{
    const houseEmojis = {
        Gryffindor: "🦁",
        Slytherin: "🐍",
        Hufflepuff: "🦡",
        Ravenclaw: "🦅",
    };

    const[card, setCard] = useState([])
    const [searchName, setSearchName] = useState("");
    const [house, setHouse] = useState("");

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
    }, []);

const filteredCards = card.filter((character) => {
  const matchesName = character.name.toLowerCase().includes(searchName.toLowerCase());
    const matchesHouse= house === "" || character.house === house;
    return matchesName && matchesHouse;
});



    return(
        <div className="card-list">
            <div className="card-list-title">
                <h1>
                    <i style={{color:'#fadb10'}}>
                        <b>"Juro solemnemente que esto es una travesura"</b></i>
                </h1>
            </div>
            <div className="card-list-form">
                <form className='form-card-list'>
                    <img src="/huella.png"></img>
                    <label style={{color:'#fadb10'}} for='name'>Encuentra tu personaje: </label>
                    <input type='text' placeholder='Harry Potter' value={searchName} onChange={(ev)=>setSearchName(ev.target.value)}></input><img src="/huella.png"></img><br>
                    </br><br></br>
                    <label style={{color:'#fadb10'}} for='name'>
                        <img src="/icono-sombrero1.png"></img>¿A qué casa pertenece?: 
                        </label>
                   <select name='filter-house' id='houses' value={house} onChange={(ev)=>setHouse(ev.target.value)}>
                        <option value="">Todas</option>
                        <option value='Gryffindor'>Gryffindor 🦁</option>
                        <option value='Slytherin'>Slytherin 🐍</option>
                        <option value='Hufflepuff'>Hufflepuff 🦡</option>
                        <option value='Ravenclaw'>Ravenclaw 🦅</option>
                    </select> <img src="/icono-sombrero1.png"></img>
                </form>
            </div><br></br>
            <div className="card-list-container">
            {filteredCards.map((character) =>(
                <Link key={character.name} to={`/characters/${(character.name)}`}>
                <Cards
                    image={character.image}
                    name={character.name}
                    house={character.house}
                    houseEmoji={houseEmojis[character.house]}
                />
                </Link>
                    
                )
            )};
            </div>
        </div>

    );
};

export default CardList;

