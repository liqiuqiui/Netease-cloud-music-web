//lib
import React, { memo } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

const DjRadioRecommend = memo(function DjRadioRecommend(props) {
  const {dataList} = useSelector(state => ({
    dataList: state.getIn(["djRadio", "programRecommendList"]).programs,
    
  }), shallowEqual);
  return (
    <Wrapper>
      <div className="list-header">
        <h3 className="title">推荐节目</h3>
        <span>（每日更新）</span>
      </div>
      <div className="list">
        <ul>
          {
            dataList?.map(item => {
              return (
                <li key={item.id} className="list-item">
                  {/*图片*/}
                  <div className="list-item-image" title="播放">
                    <img src={item.coverUrl + "?param=40y40"} alt=""/>
                    <i className="icon sprite_icon"/>
                  </div>
                  {/*电台名*/}
                  <div className="list-item-name">
                    <h3 className="list-item-center-top text-nowrap" title={item.name}>
                      <Link to={"/discover/djradio/program?id=" + item.id}>{item.name}</Link>
                    </h3>
                  
                  </div>
                  {/*描述*/}
                  <div className="list-item-desc">
                    <p className="text-nowrap">
                      <Link
                        title={item.radio.name}
                        to={"/discover/djradio/detail?id=" + item.radio.id}>
                        {item.radio.name}
                      </Link>
                    </p>
                  </div>
                  {/*类别*/}
                  <div className="list-item-listener">
                    播放{item.listenerCount}
                  </div>
                  <div className="list-item-like">赞{item.likedCount}</div>
                  <Link
                    to={"/discover/djradio/category?id=" + item.categoryId}
                    className="list-item-cate">{item.radio.category}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </Wrapper>
  )
});

DjRadioRecommend.propTypes = {};
DjRadioRecommend.defaultProps = {};

export default DjRadioRecommend;
