//lib
import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

//components
import { Wrapper } from "./style.js"
import { getTopList } from "../../../../../../services/top-list";
//utils
import queryStringParser from "../../../../../../utils/queryStringParser";
import { shallowEqual, useSelector } from "react-redux";

const TopListLeft = memo(function TopListLeft(props) {
  const location = useLocation();
  const currentTabId = queryStringParser(location.search).id || 19723756;
  const topList = useSelector((state) => state.getIn(['toplist', "topList"], shallowEqual));
  
  return (
    <Wrapper {...props}>
      <h2>云音乐特色榜</h2>
      <ul>
        {
          topList?.slice(0, 4)?.map(item => {
            return (
              <li key={item.id} className={+currentTabId === +item.id ? "active" : ""}>
                <Link to={"/discover/toplist?id=" + item.id}>
                  <div className="left">
                    <img src={item?.coverImgUrl} alt=""/>
                  </div>
                  <div className="right">
                    <div className="right-top">{item?.name}</div>
                    <div className="right-bottom">{item?.updateFrequency}</div>
                  </div>
                </Link>
              
              </li>
            )
          })
        }
      </ul>
      <h2>全球媒体榜</h2>
      <ul>
        {
          topList?.slice(5)?.map(item => {
            return (
              <li key={item.id} className={+currentTabId === +item.id ? "active" : ""}>
                <Link to={"/discover/toplist?id=" + item.id}>
                  <div className="left">
                    <img src={item?.coverImgUrl} alt=""/>
                  </div>
                  <div className="right">
                    <div className="right-top">{item?.name}</div>
                    <div className="right-bottom">{item?.updateFrequency}</div>
                  </div>
                </Link>
              </li>
            )
          })
        }
      
      </ul>
    </Wrapper>
  )
});

TopListLeft.propTypes = {};
TopListLeft.defaultProp = {};

export default TopListLeft;
