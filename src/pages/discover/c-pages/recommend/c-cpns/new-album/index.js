import React, { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getAlbumsAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import HYAlbumCover from '@/components/album-cover';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import { AlbumWrapper } from './style';

export default memo(function HYNewAlbum() {
  // redux hooks
  const {albums} = useSelector(state => ({
    albums: state.getIn(["recommend", "albums"])
  }), shallowEqual);
  const dispatch = useDispatch();
  
  // other hooks
  const pageRef = useRef();
  useEffect(() => {
    dispatch(getAlbumsAction(10));
  }, [dispatch]);
  // console.log(albums);
  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM
        title={{text: "新碟上架", to: "/discover/album"}}
        more={{text: "更多", to: "/discover/album"}}
      />
      <div className="content">
        <button className="arrow arrow-left sprite_02"
                onClick={e => pageRef.current.prev()}/>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      albums?.slice(item * 5, (item + 1) * 5)?.map(item => {
                        return <HYAlbumCover style={{marginTop:"15px"}} key={item.id}
                                             info={item}
                                             size={100}
                                             width={118}
                                             bgp="-570px"/>
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02"
                onClick={e => pageRef.current.next()}/>
      </div>
    </AlbumWrapper>
  )
})


// import React, { memo, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { NewAlbumeWrapper } from './style';

// import LThemeHeaderRCM from '@/components/theme-header-rcm';

// import { getAlbumsAtion } from '../../store/actionCreators';
// // import { getNewAlbums } from '@/services/recommend';

// export default memo(function LNewAlbum() {

//   const dispatch  = useDispatch()

//   useEffect(() => {
//     dispatch(getAlbumsAtion())
//   })

//   return (
//     <NewAlbumeWrapper>
//       <LThemeHeaderRCM title="新碟上架" />

//     </NewAlbumeWrapper>
//   )
// })


