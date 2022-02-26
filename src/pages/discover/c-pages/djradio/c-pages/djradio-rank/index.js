//lib
import React, { memo } from "react";
import PropTypes from "prop-types";
import { shallowEqual, useSelector } from "react-redux";

//components
import { Wrapper } from "./style.js"
import { Li } from "./style";
import { Link } from "react-router-dom";
//utils
import { formatMonthDay } from "../../../../../../utils/format-utils";

const DjRadioRank = memo(function DjRadioRank(props) {
  const {
    toplist: dataList,
    updateTime = 0
  } = useSelector(state => state.getIn(["djRadio", "programRankList"]), shallowEqual);
  return (
    <Wrapper className="djradio-rank">
      <div className="rank-header">
        <div className="left">
          <h3 className="title">节目排行榜</h3>
          <span>最近更新：{formatMonthDay(updateTime)}</span>
        </div>
        <div className="info">
          <i className="sprite_icon3"/>
          <div className="tip">
            选取云音乐中7天内发布的热度最高的节目，每天更新。热度由节目播放、赞、分享数量总和计算。
          </div>
        </div>
      </div>
      <div className="djradio-rank-list">
        <ul>{
          dataList?.map((item, index) => {
            return (
              <Li lastRank={item.lastRank} rankDiff={(index + 1) - item.lastRank}
                  key={item.program.id}
                  className="rank-list-item">
                <div className="rank">
                  <em>{((index + 1) + "").padStart(2, "0")}</em>
                  <span>
                    <i className="sprite_icon2 icon"/>
                    {
                      item.lastRank !== -1
                      && Math.abs((index + 1) - item.lastRank)
                    }
                  </span>
                </div>
                <div className="play" title="播放">
                  <img src={item.program.coverUrl + "?param=40y40"} alt=""/>
                  <i className="icon sprite_icon"/>
                </div>
                {/*电台节目名*/}
                <div className="name">
                  <h3 className="text-nowrap"
                      title={item.program.name}>
                    <Link to={"/discover/djradio/program?id=" + item.program.id}>{item.program.name}</Link>
                  </h3>
                
                </div>
                {/*描述*/}
                <div className="desc">
                  <p className="text-nowrap">
                    <Link
                      title={item.program.radio.name}
                      to={"/discover/djradio/detail?id=" + item.program.radio.id}>
                      {item.program.radio.name}
                    </Link>
                  </p>
                </div>
                {/*类别*/}
                <div className="cate">
                  <Link
                    to={"/discover/djradio/category?id=" + item?.program?.categoryId}
                    className="list-item-right">{item?.program?.radio?.category}</Link>
                  {/*<span>{item?.program?.radio?.category}</span>*/}
                </div>
                <span className="hot sprite_table">
                  <i className="sprite_table" style={{width: item.score / 166255 * 100 + "%"}}>
                    <i className="sprite_table"/>
                  </i>
                </span>
              </Li>
            )
          })
        }</ul>
      </div>
    </Wrapper>
  )
  // return <div>xx</div>
});

DjRadioRank.propTypes = {};
DjRadioRank.defaultProps = {};

export default DjRadioRank;
