import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getHotRecommendsAction } from '../../store/actionCreators';
//组件
import { HotRecommendWrapper } from './style';
import LThemeHeaderRCm from '@/components/theme-header-rcm';
import LMusicCover from '@/components/music-cover';

export default memo(function LHotRecommend() {
  //state
  
  //redux hooks
  const dispatch = useDispatch();
  const {hotRecommends} = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)
  // console.log(hotRecommends);
  
  //other hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(8))
  }, [dispatch])
  const keywords = [{
    text: '华语',
    to: "/discover/playlist?cate=华语"
  }, {
    text: '流行',
    to: "/discover/playlist?cate=流行"
  }, {
    text: '摇滚',
    to: "/discover/playlist?cate=摇滚"
  }, {
    text: '民谣',
    to: "/discover/playlist?cate=民谣"
  }, {
    text: '电子',
    to: "/discover/playlist?cate=电子"
  }
  ]
  //返回的jsx
  return (
    <HotRecommendWrapper>
      <LThemeHeaderRCm
        more={{text: "更多", to: "/discover/playlist"}}
        title={{text: "热门推荐", to: "/discover/playlist"}}
        keywords={keywords}/>
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <div className="recommend-item" key={item.id}>
              <LMusicCover info={{
                id: item.id,
                imgUrl: item.picUrl,
                playCount: item.playCount,
                desc: item.name,
                type: item.type,
              }}/>
            </div>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
