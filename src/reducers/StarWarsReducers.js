import {
  GET_ALL_SW_FILMS,
  GET_ALL_CHARACTERS,
  LIST_CHARACTER_LOADING,
  DROPDOWN_LOADING,
  LIST_STARSHIP_LOADING,
  GET_ALL_STARSHIPS
} from '../actions/types'

const INITIAL_STATE = {
  allSWFilms: {},
  allCharacters: {},
  allStarships: {},
  isDropDownLoading: false,
  isListCharacterLoading: false,
  isListStarshipLoading: false
}

const StarWarsReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_SW_FILMS:
      return { ...state, allSWFilms: action.payload.results }
    case GET_ALL_CHARACTERS:
      return { ...state, allCharacters: action.payload }
    case GET_ALL_STARSHIPS:
      return { ...state, allStarships: action.payload }
    case DROPDOWN_LOADING:
      return { ...state, isDropDownLoading: action.payload }
    case LIST_CHARACTER_LOADING:
      return { ...state, isListCharacterLoading: action.payload }
    case LIST_STARSHIP_LOADING:
      return { ...state, isListStarshipLoading: action.payload }
    default:
      return state
  }
}

export default StarWarsReducers
