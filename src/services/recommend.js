import request from './request';

//banner
export const getBanners = () => request.get('/banner');

//热门推荐
export const getHotRecommends = (limit = 8) => request.get('/personalized', {params: {limit}});

export const getDjProgramRecommends = () => request.get('/personalized/djprogram')
//新碟上架
// export const getAlbums = (limit = 10) => request.get('/top/album', {params: {limit, type:"hot"}});
export const getAlbums = () => request.get('/album/newest');

//排行榜
// export const getRanking = (idx = 0) => request.get('/top/list', {params: {idx}});
export const getRanking = (id) => request.get('/playlist/detail', {params: {id}});
//入驻歌手
export const getArtistList = (cat, limit) => request.get("/artist/list", {
  params: {cat, limit}
})
