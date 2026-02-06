import './Cards.scss'

const Cards = ({image,name, gender, house, species }) =>{
    return(
          <div className="card-container-detail">
            <div className="cardDetail-info">
                <img className="cardDetail-imgcard"src={image || '/noImage.jfif'} alt= {name}></img>
                <h2 className="cardDetail-name">{name}</h2>
                <h3 className="cardDetail-gender">Genero: {gender}</h3>
                <h3 className="cardDetail-house">Casa: {house}</h3>
                <h3 className="cardDetail-species">Especie: {species}</h3>
            </div>
        </div>
    )
}

export default Cards

