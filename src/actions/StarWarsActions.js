import axios from 'axios'
import _ from 'lodash'
import {
  GET_ALL_SW_FILMS,
  GET_ALL_CHARACTERS,
  LIST_CHARACTER_LOADING,
  DROPDOWN_LOADING,
  GET_ALL_STARSHIPS,
  LIST_STARSHIP_LOADING
} from './types'

export const getAllSWFilms = () => async (dispatch) => {
  dispatch({ type: DROPDOWN_LOADING, payload: true })
  const { data } = await axios.get('https://swapi.co/api/films/')
  dispatch({ type: DROPDOWN_LOADING, payload: false })

  await getAllSWFilmsSuccess(dispatch, data)
}

export const getAllCharacter = (urlFilm) => async (dispatch) => {
  dispatch({ type: LIST_CHARACTER_LOADING, payload: true })
  const { data } = await axios.get(urlFilm)

  let dataCharacter = _.map(data.characters, async character => {
    const { data } = await axios.get(character)

    return {
      name: data.name,
      starships: data.starships
    }
  })

  let res = await Promise.all(dataCharacter)
  dispatch({ type: LIST_CHARACTER_LOADING, payload: false })

  await getAllCharacterSuccess(dispatch, res)
}

export const getAllStarships = (urlStarships) => async (dispatch) => {
  dispatch({ type: LIST_STARSHIP_LOADING, payload: true })
  let dataStarships = _.map(urlStarships, async starship => {
    const { data } = await axios.get(starship)

    return {
      name: data.name,
      model: data.model
    }
  })

  let res = await Promise.all(dataStarships)
  dispatch({ type: LIST_STARSHIP_LOADING, payload: false })

  await getAllStarshipsSuccess(dispatch, res)
}

const getAllSWFilmsSuccess = (dispatch, data) => {
  dispatch({
    type: GET_ALL_SW_FILMS,
    payload: data
  })
}

const getAllCharacterSuccess = (dispatch, data) => {
  dispatch({
    type: GET_ALL_CHARACTERS,
    payload: data
  })
}

const getAllStarshipsSuccess = (dispatch, data) => {
  dispatch({
    type: GET_ALL_STARSHIPS,
    payload: data
  })
}
