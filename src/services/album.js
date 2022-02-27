import request from "./request";


//热门新碟
export const getHotAlbumList = () => request.get("/album/newest");

//全部新碟
export const getAllAlbumList = (params) => request.get("/album/new", {params});
