import React, {useContext, useEffect} from 'react'
import './Profile.css'
import {Link} from 'react-router-dom'
import {Card} from '../../components/Card/Card'
import {MainContext} from '../../context/main/mainContext'
import {Loader} from '../../components/Loader/Loader'

export const Profile = ({ match }) => {
    const {movie, loading, getMovie} = useContext(MainContext)
    const id = match.params.id

    useEffect(() => {
        getMovie(id)

        // eslint-disable-next-line
    }, [])

    return (
        <div className="profile__wrapper">
            <div className="link__wrapper">
                <Link to="/" className="link__back"><span className="link__arrow" />Назад к списку</Link>
            </div>
            <hr className="line" />
            <div className="card__wrapper">
                { movie === null
                    ? <p className="not-found">К сожалению, по вашему запросу ничего не найдено...</p>
                    : loading || Object.keys(movie).length === 0
                        ? <Loader />
                        : <Card movie={movie} />
                }
            </div>
        </div>
    )
}