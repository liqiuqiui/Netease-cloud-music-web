import request from "./request";


export const getPlaylistDetail = (id) => request("/playlist/detail", {params: {id}})
