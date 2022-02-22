import { Map } from "immutable";
import * as actionTypes from "./constants";
const initialState = Map({
  topList: [],
  topListDataList: {},
});

function reducer(state=initialState, action){
  switch (action.type) {
    case actionTypes.CHANGE_TOP_LIST_DATA_LIST:
      return state.set("topListDataList", action.topListDataList);
    case actionTypes.CHANGE_TOP_LIST:
      return state.set("topList", action.topList);
    default: return state;
  }
}
export default reducer;
