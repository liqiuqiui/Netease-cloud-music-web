import request from "./request";


export const getPlaylistDetail = (id) => request("/playlist/detail", {params: {id}});

export const getPlaylistCommentList = (id) => request.get("/comment/playlist", {params: {id}});
