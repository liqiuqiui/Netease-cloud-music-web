import React from 'react'
import {
  useDispatch,
  useSelector,
  shallowEqual,
} from 'react-redux';
import { getBannerAction } from '../../store/actionCreators';
import { useEffect, useRef, useState, useCallback } from 'react';

import { Carousel } from 'antd'
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl,
} from './style';


export default function LTopBanner(props) {

  //state
  const [current, setCurrent] = useState(0);

  //redux相关

  const dispatch = useDispatch();
  const { banners } = useSelector((state) => ({
    banners: state.getIn(['recommend', 'banners'])
  }), shallowEqual);

  //其他hooks
  const BannerRef = useRef();

  useEffect(() => {
    dispatch(getBannerAction());
  }, [dispatch]);

  // 业务相关
  const beforeChange = useCallback((from, to) => {
    // console.log(to);
    setCurrent(to)
  }, [])

  const imgUrl = banners[current] && (banners[current].imageUrl + "?imageView&blur=40x20")
  // console.log(imgUrl)
  return (
    <BannerWrapper imgUrl={imgUrl}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel ref={BannerRef} effect="fade" autoplay beforeChange={beforeChange} >
            {
              banners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight/>
        <BannerControl>
          <a className="btn left" onClick={() => BannerRef.current.prev()}>
            <span></span>
          </a>
          <a className="btn right" onClick={() => BannerRef.current.next()}>
            <span></span>
          </a>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
}
