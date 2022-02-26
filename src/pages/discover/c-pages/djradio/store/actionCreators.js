import * as actionTypes from "./constants";
import {
  getCateRecommendList,
  getDjRadioCategories, getNewRadio,
  getProgramRankList,
  getProgramRecommendList, getRadioTopList
} from "../../../../../services/djradio";

//电台分类列表
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


//电台主页的推荐列表
const changeProgramRecommendListAction = (programRecommendList) => ({
  type: actionTypes.CHANGE_DJ_RADIO_PROGRAM_RECOMMEND_LIST,
  programRecommendList
});
export const getProgramRecommendListAction = () => {
  return dispatch => {
    getProgramRecommendList().then(res => dispatch(changeProgramRecommendListAction(res)));
  }
}


//电台主页的节目排行榜
const changeProgramRankListAction = (programRankList) => ({
  type: actionTypes.CHANGE_DJ_RADIO_PROGRAM_RANK_LIST,
  programRankList
});
export const getProgramRankListAction = () => {
  return dispatch => {
    getProgramRankList().then(res => dispatch(changeProgramRankListAction(res)));
  }
}


//电台主页的推荐
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

//电台分类下的优秀新电台
const changeNewRadioAction = (newRadio) => ({
  type: actionTypes.CHANGE_NEW_RADIO,
  newRadio
});
export const getNewRadioAction = id => {
  return dispatch => {
    getNewRadio(id).then(res => {
      dispatch(changeNewRadioAction(res.djRadios));
    })
  }
}

//电台分类下的排行榜
const changeRadioTopListAction = (radioTopList) => ({
  type: actionTypes.CHANGE_RADIO_TOP_LIST,
  radioTopList
});
export const getRadioTopListAction = (params) => {
  return dispatch => {
    getRadioTopList(params).then(res => {
      dispatch(changeRadioTopListAction(res));
    })
  }
}
