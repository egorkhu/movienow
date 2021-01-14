import React, {useReducer} from 'react'
import {MainContext} from './mainContext'
import {mainReducer} from './mainReducer'
import {SET_MOVIE, GET_MOVIES, SET_LOADING, CLEAR_MOVIES, GET_MOVIE, SORT_BY} from '../types'
import axios from 'axios'

export const MainState = ({ children }) => {
    const initialState = {
        movies: [],
        movie: {},
        loading: false
    }

    const [state, dispatch] = useReducer(mainReducer, initialState)

    const setLoading = () => dispatch({ type: SET_LOADING})

    const getMovies = async () => {
        setLoading()

        const response = await axios.get('https://floating-sierra-20135.herokuapp.com/api/movies')

        dispatch({
            type: GET_MOVIES,
            payload: response.data
        })
    }

    const getMovie = async id => {
        if (Object.keys(movie).length === 0 && movie.constructor === Object) {
            setLoading()

            const response = await axios.get(`https://floating-sierra-20135.herokuapp.com/api/movie/${id}`)

            dispatch({
                type: GET_MOVIE,
                payload: response.data
            })
        }
    }

    const setMovie = movie => {
        dispatch({
            type: SET_MOVIE,
            payload: movie
        })
    }

    const clearMovies = () => dispatch({ type: CLEAR_MOVIES })

    const sortBy = param => {
        const sorted = [...state.movies]
        sorted.sort((a, b) => a[param] > b[param] ? 1 : -1)

        dispatch({
            type: SORT_BY,
            payload: sorted
        })
    }

    const {movies, movie, loading} = state

    return (
            <MainContext.Provider value={{ movies, movie, loading, getMovies, getMovie, setMovie, clearMovies, sortBy }}>
                { children }
            </MainContext.Provider>
        )
}