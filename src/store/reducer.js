import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
import { reducer as playerReducer } from "../pages/player/store";
// import { reducer as songDetailReducer } from "../pages/discover/c-pages/song-detail/store";
import { reducer as topListReducer } from "../pages/discover/c-pages/top-list/store"
import {reducer as djRadioReducer} from "../pages/discover/c-pages/djradio/store";
const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  toplist: topListReducer,
  // songDetail: songDetailReducer,
  djRadio: djRadioReducer
})

export default cReducer
