import request from "./request";

//获取歌曲评论
export const getSongComments = params => request.get("/comment/music", {params})

//获取相似歌曲
export const getSimilarSong = (id) => request.get("/simi/song", {params: {id}})

//获取包含这首歌的歌单
export const getSimilarPlaylist = (id) => request.get("/simi/playlist", {params: {id}})
