import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYTopRanking from '@/components/top-ranking';
import { RankingWrapper } from './style';
import { getRankingAction } from '../../store/actionCreators';
// import { getRankingAction } from '../../store/actionCreators';

// import { LRankingWrapper } from './style';
// import LThemeHeaderRCM from '@/components/theme-header-rcm';


export default memo(function LRanking() {
  
  const {upRanking, newRanking, originRanking} = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual);
  const dispatch = useDispatch();
  
  // other hooks
  useEffect(() => {
    dispatch(getRankingAction(19723756));
    dispatch(getRankingAction(3779629));
    dispatch(getRankingAction(2884035));
  }, [dispatch]);
  
  return (
    <RankingWrapper>
      <HYThemeHeaderRCM
        more={{text: "更多", to: "/discover/toplist"}}
        title={{text: "榜单", to: "/discover/toplist"}}/>
      <div className="tops">
        <HYTopRanking to={"/discover/toplist?id=19723756"} info={upRanking}/>
        <HYTopRanking to={"/discover/toplist?id=3779629"} info={newRanking}/>
        <HYTopRanking to={"/discover/toplist?id=2884035"}  info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})
