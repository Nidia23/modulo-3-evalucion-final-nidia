import { Link } from 'react-router-dom'
import mapa from '/public/map-merodeador.jpg'

const Portada = () => {
  return (
    <Link to="/characters" style={{ textDecoration: 'none' }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "black",
          color: "white",
          cursor: "pointer"
        }}
      >
        <h1><i>"Juro solemnemente que esto es una travesura"</i></h1>
        <img src={mapa} alt="Mapa del merodeador" />
      </div>
    </Link>
  )
}

export default Portada
