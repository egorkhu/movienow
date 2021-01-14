import React from 'react'
import './Main.css'

export const Main = ({children}) => (
    <main className="main">
        <div className="container">
            {children}
        </div>
    </main>
)