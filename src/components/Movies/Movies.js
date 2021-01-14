import React, {useContext, useEffect} from 'react'
import './Movies.css'
import {Card} from '../Card/Card'
import {MainContext} from '../../context/main/mainContext'
import {Link} from 'react-router-dom'
import {Loader} from '../Loader/Loader'

export const Movies = () => {
    const {movies, loading, getMovies, setMovie, clearMovies} = useContext(MainContext)

    useEffect(() => {
        getMovies()

        return () => {
            clearMovies()
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            { loading
                ? <Loader />
                : <div className="movies__content">
                    {movies.map(movie => (
                        <Link to={`/${movie.id}`} key={movie.id} className="movie__link" onClick={() => setMovie(movie)}>
                            <Card movie={movie} />
                        </Link>
                    ))}
                </div>
            }
        </>
    )
}