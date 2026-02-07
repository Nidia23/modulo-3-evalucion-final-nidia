import './Cards.scss'
//Cartas que recibo 
const Cards = ({image,name, house, houseEmoji}) =>{
    return(
          <div className="card-container">
            <div className="card-info">
                <img className="card-imgcard"src={image || '/noImage.jfif'} alt= {name}></img>
                <h2 className="card-name">{name}</h2>
                <h3 className="card-house">{house || 'No tiene casa'}{houseEmoji && <span>{houseEmoji}</span>}</h3>
                
            </div>
        </div>
    )
}

export default Cards

