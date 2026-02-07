import React,{ useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import Portada from "./components/Landing";
import CardList from './pages/Card-list'
import CardsDetail from './pages/CardsDetail'
import './components/App.scss'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Portada />} />
      <Route path="/characters" element={<CardList />} />
      <Route path="/characters/:name" element={<CardsDetail />} />
    </Routes>
  )
}

export default App

