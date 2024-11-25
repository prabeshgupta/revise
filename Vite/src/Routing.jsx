import React from 'react'
import Header from './components/Header'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

const Routing = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    )
}

export default Routing