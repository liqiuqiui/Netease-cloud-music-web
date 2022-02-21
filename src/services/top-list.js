import request from "./request";

//获取所有的排行榜
export const getTopList = () => request.get("/toplist")

//获取排行榜详情
export const getTopListDetail = (id) => request.get('/playlist/detail', {params: {id}});
