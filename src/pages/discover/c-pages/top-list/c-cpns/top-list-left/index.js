//lib
import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"
import { getTopList } from "../../../../../../services/top-list";

const TopListLeft = memo(function TopListLeft(props) {
  const [topList, setTopList] = useState([]);
  
  useEffect(() => {
    getTopList().then(res => {
      // console.log(res.list)
      setTopList(res.list);
    })
  }, [])
  return (
    <Wrapper {...props}>
      <h2>云音乐特色榜</h2>
      <ul>
        {
          topList?.slice(0, 4)?.map(item => {
            return (
              <li key={item.id}>
                <div className="left">
                  <img src={item?.coverImgUrl} alt=""/>
                </div>
                <div className="right">
                  <div className="right-top">{item?.name}</div>
                  <div className="right-bottom">{item?.updateFrequency}</div>
                </div>
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
              <li key={item.id}>
                <div className="left">
                  <img src={item?.coverImgUrl} alt=""/>
                </div>
                <div className="right">
                  <div className="right-top">{item?.name}</div>
                  <div className="right-bottom">{item?.updateFrequency}</div>
                </div>
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
