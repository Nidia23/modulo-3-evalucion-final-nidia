import { Link } from 'react-router-dom'
import mapa from '/public/map-merodeador.jpg'

const Portada = () => {
  return (
    <Link to="/characters" style={{ textDecoration: 'none' }}>
      <div className='landing-img'>
        <img  src={mapa} alt="Mapa del merodeador" />
      </div>
    </Link>
  )
}

export default Portada
