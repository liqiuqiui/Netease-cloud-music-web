import React, { memo } from 'react';


import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style';

import LTopBanner from './c-cpns/top-banner';
import LHotRecommend from './c-cpns/hot-recommend';
import LNewAlbum from './c-cpns/new-album';
import LRanking from './c-cpns/ranking';
import LUserProfile from "./c-cpns/user-profile";
import Singer from "./c-cpns/settled-singer";
import HotDJ from "./c-cpns/hot-radio";

export default memo(function LRecommend() {
  return (
    <RecommendWrapper>
      <LTopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <LHotRecommend/>
          <LNewAlbum/>
          <LRanking/>
        </RecommendLeft>
        <RecommendRight>
          <LUserProfile/>
          <Singer/>
          <HotDJ/>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})


// import React from 'react'
// import {
//   useDispatch,
//   useSelector,
//   shallowEqual,
// } from 'react-redux';
// import { getBannerAction } from './store/actionCreators';
// import { useEffect, useRef, useState, useCallback } from 'react';

// import { Carousel } from 'antd'
// import {
//   BannerWrapper,
//   BannerLeft,
//   BannerRight,
//   BannerControl,
// } from './style';


// export default function LRecommend(props) {

//   //state
//   const [current, setCurrent] = useState(0);

//   //redux相关

//   const dispatch = useDispatch();
//   const { banners } = useSelector((state) => ({
//     banners: state.getIn(['recommend', 'banners'])
//   }), shallowEqual);

//   //其他hooks
//   const BannerRef = useRef();

//   useEffect(() => {
//     dispatch(getBannerAction());
//   }, [dispatch]);

//   // 业务相关
//   const beforeChange = useCallback((from, to) => {
//     console.log(to);
//     setCurrent(to)
//   }, [])

//   const imgUrl = banners[current] && (banners[current].imageUrl + "?imageView&blur=40x20")
//   console.log(imgUrl)
//   return (
//     <BannerWrapper imgUrl={imgUrl}>
//       <div className="banner wrap-v2">
//         <BannerLeft>
//           <Carousel ref={BannerRef} effect="fade" autoplay beforeChange={beforeChange} >
//             {
//               banners.map((item, index) => {
//                 return (
//                   <div className="banner-item" key={item.imageUrl}>
//                     <img src={item.imageUrl} alt={item.typeTitle} />
//                   </div>
//                 )
//               })
//             }
//           </Carousel>
//         </BannerLeft>
//         <BannerRight></BannerRight>
//         <BannerControl>
//           <a className="btn left" onClick={e => BannerRef.current.prev()}></a>
//           <a className="btn right" onClick={e => BannerRef.current.next()}></a>
//         </BannerControl>
//       </div>
//     </BannerWrapper>
//   );
// }


// function LRecommend(props) {
//   const { getBanners, banners } = props;

//   useEffect(() => {
//     getBanners()
//   }, [getBanners])
//   return (
//     <div>
//       LRecommend{banners.length}
//     </div>
//   )
// }
// const mapStateToProps = state => ({
//   banners: state.recommend.banners
// })
// const mapDispatchToProps = dispatch => ({
//   getBanners() {
//     dispatch(getBannerAction())
//   }
// })
// export default connect(mapStateToProps, mapDispatchToProps)(memo(LRecommend))
