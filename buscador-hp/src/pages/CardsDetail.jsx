import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const CardsDetail = () => {
  const { name } = useParams()
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('https://hp-api.onrender.com/api/characters')
      const data = await response.json()
      const found = data.find(c => c.name === name)
      setCharacter(found)
    }
    loadData()
  }, [name])

  if (!character) return <p>Cargando...</p>

  return (
    <div>
      <Link to="/characters">
        <button className="backBtn">Volver al inicio
          <img src="/huellas.png"></img>
          </button>
      </Link>
      <div className="card-container-detail">
        <img
          className="cardDetail-imgcard"
          src={character.image || '/noImage.jfif'}
          alt={character.name}
        />
        <div className="cardDetail-info">
          <h2 className="cardDetail-name">{character.name}</h2>
          <h3 className="cardDetail-gender">Género: {character.gender}</h3>
          <h3 className="cardDetail-house">Casa: {character.house || 'Desconocida'}</h3>
          <h3 className="cardDetail-species">Especie: {character.species || 'Desconocida'}</h3>
        </div>
      </div>
    </div>
  )
}

export default CardsDetail
