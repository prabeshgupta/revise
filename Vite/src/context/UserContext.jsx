import React, { createContext } from 'react'

export const ShareData = createContext();

const UserContext = ({ children }) => {
    return (
        <>
            <ShareData.Provider value='Web Development'>
                {children}
            </ShareData.Provider>
        </>
    )
}

export default UserContext