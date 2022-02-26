import request from "./request";

//获取电台分类列表
export const getDjRadioCategories = () => request.get("/dj/catelist");

//获取节目推荐列表
export const getProgramRecommendList = () => request.get("/program/recommend");

//获取节目排行榜列表
export const getProgramRankList = () => request.get("/dj/program/toplist");

//获取电台分类推荐
export const getCateRecommendList = (idList = [2, 6, 3, 2001, 11]) => {
  return new Promise((resolve, reject) => {
    //批量生成请求
    const requestList = idList.map(id => {
      return request.get("/dj/recommend/type", {params: {type: id}})
    });
    //返回所有
    Promise.all(requestList).then(resolve, reject);
  })
}

// 获取优秀新电台
export const getNewRadio = (cateId) => request.get("/dj/recommend/type", {params: {type: cateId}});

//获取电排排行榜
export const getRadioTopList = (params = {}) => request.get("/dj/radio/hot", {params});
