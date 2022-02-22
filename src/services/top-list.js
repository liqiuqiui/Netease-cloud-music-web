import request from "./request";

//获取所有的排行榜
export const getTopList = () => request.get("/toplist")

//获取排行榜详情
export const getTopListDetail = (id) => request.get('/playlist/detail', {params: {id}});

//获取歌单评论
export const getPlaylistComment = (params)=> request.get("/comment/playlist",{params})
