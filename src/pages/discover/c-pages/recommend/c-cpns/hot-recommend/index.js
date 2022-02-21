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
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)
  // console.log(hotRecommends);
  
  //other hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(8))
  }, [dispatch])
  const keywords = [{ title: '华语' }, { title: '流行' }, { title: '摇滚' }, { title: '民谣' }, { title: '电子' }]
  //返回的jsx
  return (
    <HotRecommendWrapper>
      <LThemeHeaderRCm title="热门推荐" keywords={keywords} />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <div className="recommend-item" key={item.id}>
              <LMusicCover info={item} />
            </div>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
