import { useState } from 'react'
import hpLogo from '/hp.png'
import './App.css'
import CardList from './pages/Card-list'


function App() {
  

  return (
    <>
      <section>
        <div>
          <form>
            <label for='name'>Encuentra tu personaje: </label>
            <input type='text' placeholder='Harry Potter'></input>
            <label for='name'>¿A qué casa pertenece?: </label>
            <select name='filter-house' id='houses'>
              <option value='Gryffindor'>Gryffindor</option>
              <option value='Slytherin'>Slytherin</option>
              <option value='Hufflepuff'>Hufflepuff</option>
              <option value='Ravenclaw'>Ravenclaw</option>
            </select>
          </form>
        <button>Buscar</button>
        </div>
      </section>
     <CardList></CardList>
    </>
  )
}

export default App
