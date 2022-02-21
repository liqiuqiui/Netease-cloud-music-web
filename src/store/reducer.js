import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
import { reducer as playerReducer } from "../pages/player/store";
// import { reducer as songDetailReducer } from "../pages/discover/c-pages/song-detail/store";

const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  // songDetail: songDetailReducer,
})

export default cReducer
