import * as actionTypes
// ,
// {
//   CHANGE_BANNERS,
//     CHANGE_HOT_RECOMMENDS,
//     CHANGE_ALBUMS,
//     CHANGE_UP_RANKING,
//     CHANGE_NEW_RANKING,
//     CHANGE_ORIGIN_RANKING
// }
from
'./constants.js';
import { Map } from 'immutable';

const initialState = Map({
  banners: [],
  hotRecommends: [],
  albums: [],
  upRanking: {},
  newRanking: {},
  originRanking: {},
  settledSingerList: [],
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNERS:
      return state.set('banners', action.banners)
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set('hotRecommends', action.hotRecommends)
    case actionTypes.CHANGE_ALBUMS:
      return state.set('albums', action.albums)
    case actionTypes.CHANGE_UP_RANKING:
      return state.set('upRanking', action.upRanking)
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set('newRanking', action.newRanking)
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set('originRanking', action.originRanking)
    case actionTypes.CHANGE_SETTLED_SINGER_LIST:
      return state.set('settledSingerList', action.settledSingerList)
    default:
      return state;
  }
}

export default reducer
