import {SET_MOVIE, GET_MOVIES, SET_LOADING, CLEAR_MOVIES, GET_MOVIE, SORT_BY} from '../types'

const handlers = {
    [GET_MOVIES]: (state, {payload}) => ({ ...state, movies: payload.data, loading: false }),
    [GET_MOVIE]: (state, {payload}) => ({ ...state, movie: payload.data, loading: false }),
    [SET_MOVIE]: (state, {payload}) => ({ ...state, movie: payload }),
    [CLEAR_MOVIES]: (state) => ({ ...state, movies: [] }),
    [SORT_BY]: (state, {payload}) => ({ ...state, movies: payload }),
    [SET_LOADING]: state => ({ ...state, loading: true }),
    DEFAULT: state => state
}

export const mainReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}