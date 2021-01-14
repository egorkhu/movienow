import React, {useContext} from 'react'
import './List.css'
import {Checkbox} from '../../components/Checkbox/Checkbox'
import {Movies} from '../../components/Movies/Movies'
import {MainContext} from '../../context/main/mainContext'

export const List = () => {
    const {sortBy} = useContext(MainContext)

    return (
        <div className="list__wrapper">
            <h1 className="list__title">Фильмы</h1>
            <form className="list__sort-options">
                <Checkbox id="name" title="Отсортировать по названию" name="sort" sortHandler={() => sortBy('title')} />
                <Checkbox id="year" title="Отсортировать по году" name="sort" sortHandler={() => sortBy('year')} />
            </form>
            <hr className="line" />
            <Movies />
        </div>
    )
}