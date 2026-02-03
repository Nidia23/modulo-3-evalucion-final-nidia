import { useState } from 'react'
import hpLogo from '/hp.png'
import './App.scss'
import { Link, Route, Routes } from 'react-router-dom'
import CardList from './pages/Card-list'
import CharDetail from './pages/Card-detail'


function App() {
  

  return (
    <>
      <section>
        <div>
          <form className='form-card-list'>
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
    <></>
      <section>
        <Routes>
          <Route path="/" element={<CardList/>}/>
          <Route path="/characters/:id" element={<CharDetail/>}/>
        </Routes>
      </section>
     <CardList></CardList>
    </>
  )
}

export default App
