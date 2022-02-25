import * as actionTypes from "./constants";
import {
  getCateRecommendList,
  getDjRadioCategories,
  getProgramRankList,
  getProgramRecommendList
} from "../../../../../services/djradio";

const changeDjRadioCategoriesAction = (djRadioCategories) => ({
  type: actionTypes.CHANGE_DJ_RADIO_CATEGORIES,
  djRadioCategories
});
export const getDjRadioCategoriesAction = () => {
  return dispatch => {
    getDjRadioCategories().then(res => {
      // console.log(res);
      dispatch(changeDjRadioCategoriesAction(res.categories));
    })
  }
}


const changeProgramRecommendListAction = (programRecommendList) => ({
  type: actionTypes.CHANGE_DJ_RADIO_PROGRAM_RECOMMEND_LIST,
  programRecommendList
});
export const getProgramRecommendListAction = () => {
  return dispatch => {
    getProgramRecommendList().then(res => dispatch(changeProgramRecommendListAction(res)));
  }
}


const changeProgramRankListAction = (programRankList) => ({
  type: actionTypes.CHANGE_DJ_RADIO_PROGRAM_RANK_LIST,
  programRankList
});
export const getProgramRankListAction = () => {
  return dispatch => {
    getProgramRankList().then(res => dispatch(changeProgramRankListAction(res)));
  }
}

const changeCateRecommendListAction = (cateRecommendList) => ({
  type: actionTypes.CHANGE_CATE_RECOMMEND_LIST,
  cateRecommendList
});
export const getCateRecommendListAction = (idList) => {
  return dispatch => {
    const nameList = ["音乐推荐", "生活", "情感", "创作翻唱", "知识"];
    getCateRecommendList(idList).then(res => {
      res = res.map((item, index) => {
        item.id = idList[index];
        item.name = nameList[index];
        return item;
      })
      dispatch(changeCateRecommendListAction(res));
    })
  }
}



