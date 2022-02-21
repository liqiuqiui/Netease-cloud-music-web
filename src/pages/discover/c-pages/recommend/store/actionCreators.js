import {
  getBanners,
  getHotRecommends,
  getDjProgramRecommends,
  getAlbums,
  getRanking,
  getArtistList
} from '@/services/recommend';
import * as actionTypes from './constants';


const changeBannersAction = banners => ({
  type: actionTypes.CHANGE_BANNERS,
  banners
})
export const getBannerAction = () => dispatch => {
  getBanners().then(res => {
    dispatch(changeBannersAction(res.banners))
  })
}


const changeHotRecommendsAction = hotRecommends => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends
})
export const getHotRecommendsAction = (limit) => async dispatch => {
  // getHotRecommends(limit).then(res => {
  //   dispatch(changeHotRecommendsAction(res.result))
  // })
  const {result: songSheetRes} = await getHotRecommends(limit);
  const {result: djProgramRes} = await getDjProgramRecommends()
  djProgramRes.forEach(i=>i.playCount=i.program.adjustedPlayCount)
  songSheetRes.splice(3, 0, djProgramRes[0]);
  songSheetRes.splice(5, 0, djProgramRes[1]);
  songSheetRes.splice(7, 0, djProgramRes[2]);
  songSheetRes.length = 8
  dispatch(changeHotRecommendsAction(songSheetRes))
  
  console.log(songSheetRes)
}


const changeAlbumsAction = albums => ({
  type: actionTypes.CHANGE_ALBUMS,
  albums
})
export const getAlbumsAction = (limit) => dispatch => {
  getAlbums(limit).then(res => {
    dispatch(changeAlbumsAction(res.albums))
  })
}


const changeUpRankingAction = upRanking => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking
})
const changeNewRankingAction = newRanking => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking
})
const changeOriginRankingAction = originRanking => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking
})
export const getRankingAction = (id) => dispatch => {
  getRanking(id).then(res => {
    switch (id) {
      case 3779629:
        dispatch(changeNewRankingAction(res.playlist))
        break;
      case 2884035:
        dispatch(changeOriginRankingAction(res.playlist))
        break;
      case 19723756:
        dispatch(changeUpRankingAction(res.playlist))
        break;
      default:
        break;
    }
    // console.log(res, idx);
  })
  
}

const changeSettledSingerListAction = (settledSingerList) => ({
  type: actionTypes.CHANGE_SETTLED_SINGER_LIST,
  settledSingerList
})
export const getSettledSingerListAction = (cat = 5001, limit = 5) => {
  return dispatch => {
    getArtistList(cat, limit).then(res => {
      // console.log(res)
      dispatch(changeSettledSingerListAction(res.artists))
    })
  }
}
