import React from 'react'
import './Card.css'
import {joinArrayComma} from '../../hof'

export const Card = ({ movie }) => (
    <article className="card">
            <div className="card__img-wrapper">
                    <img src={movie.poster} alt={movie.title} className="card__img"/>
            </div>
            <div className="card__movie">
                <h3 className="movie__name">{movie.title}</h3>
                <p>
                    <span className="movie__year">{movie.year}<span>,</span></span>&nbsp;
                    <span className="movie__genre">{joinArrayComma(movie.genres)}</span>
                </p>
                <p className="movie__director">Режиссёр:&nbsp;<span>{joinArrayComma(movie.directors)}</span></p>
                <p className="movie__actors">Актёры:<span>{joinArrayComma(movie.actors)}</span>
                </p>
                {
                    movie.description ? <p className="movie__description">{movie.description}</p> : null
                }
                {
                    movie.collapse.duration ? <span className="movie__duration">{movie.collapse.duration[0]}<span className="movie-icon"></span></span> : null
                }
            </div>
    </article>
)