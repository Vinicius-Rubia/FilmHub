import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { SearchResult } from '../pages/SearchResult'
import { Explore } from '../pages/Explore'
import { PageNotFound } from '../pages/404'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
