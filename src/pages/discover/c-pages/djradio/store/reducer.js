import { Map } from "immutable";
import * as actionTypes from "./constants";

const initialState = Map({
  djRadioCategories: [],
  programRecommendList: {},
  programRankList: {},
  cateRecommendList: [],
  newRadio: [],
  radioTopList: {},
})


const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case actionTypes.CHANGE_DJ_RADIO_CATEGORIES:
      return state.set("djRadioCategories", action.djRadioCategories)
    case actionTypes.CHANGE_DJ_RADIO_PROGRAM_RECOMMEND_LIST:
      return state.set("programRecommendList", action.programRecommendList);
    case actionTypes.CHANGE_DJ_RADIO_PROGRAM_RANK_LIST:
      return state.set("programRankList", action.programRankList);
    case actionTypes.CHANGE_CATE_RECOMMEND_LIST:
      return state.set("cateRecommendList", action.cateRecommendList);
    case actionTypes.CHANGE_NEW_RADIO:
      return state.set("newRadio", action.newRadio);
    case actionTypes.CHANGE_RADIO_TOP_LIST:
      return state.set("radioTopList", action.radioTopList);
    default:
      return state;
  }
  
}

export default reducer;
