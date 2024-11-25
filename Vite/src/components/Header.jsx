import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <h1>Vite</h1>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </>
    )
}

export default Header