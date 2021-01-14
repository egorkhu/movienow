import React from 'react'
import './Loader.css'
import loader from '../../img/Loader.png'

export const Loader = () => (
        <div className="loader__wrapper">
                <img src={loader} alt="Загрузка" className="loader"/>
        </div>
)