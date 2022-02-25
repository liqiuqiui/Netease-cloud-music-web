import { Map } from "immutable";
import * as actionTypes from "./constants";

const initialState = Map({
  djRadioCategories: [],
  programRecommendList: {},
  programRankList: {},
  cateRecommendList: [],
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
    default:
      return state;
  }
  
}

export default reducer;
