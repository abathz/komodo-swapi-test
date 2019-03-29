import { combineReducers } from 'redux'
import StarWarsReducers from './StarWarsReducers'

const RootReducers = combineReducers({
  starwars: StarWarsReducers
})

export default RootReducers
