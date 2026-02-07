import './Cards.scss'
//Cartas que recibo 
const Cards = ({image,name, gender}) =>{
    return(
          <div className="card-container">
            <div className="card-info">
                <img className="card-imgcard"src={image || '/noImage.jfif'} alt= {name}></img>
                <h2 className="card-name">{name}</h2>
                <h3 className="card-gender">Genero: {gender || 'No tiene género'}</h3>
                
            </div>
        </div>
    )
}

export default Cards

