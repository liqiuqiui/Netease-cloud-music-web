import * as actionTypes from "./constants";
import { getTopList, getTopListDetail } from "../../../../../services/top-list";

const changeTopListAction = (topList) => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList
})
export const getTopListAction = () => {
  return dispatch => {
    getTopList().then(res => {
      dispatch(changeTopListAction(res.list))
    })
  }
}

const changeTopListDataListAction = (topListDataList) => ({
  type: actionTypes.CHANGE_TOP_LIST_DATA_LIST,
  topListDataList
});
export const getTopListDataListAction = (id) => {
  return dispatch => {
    getTopListDetail(id).then(res => {
      // console.log(res.playlist);
      dispatch(changeTopListDataListAction(res.playlist))
    })
  }
}
