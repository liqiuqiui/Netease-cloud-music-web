//lib
import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import { shallowEqual, useSelector } from "react-redux";

//components
import { Wrapper, Li } from "./style.js"
import ThemeHeaderDj from "../../../../../../../../components/theme-header-dj";
import { Link } from "react-router-dom";

const ProgramRank = memo(function ProgramRank(props) {
  const dataList = useSelector(state => state.getIn(["djRadio", "programRankList"])?.toplist?.slice(0, 10), shallowEqual);
  return (
    <Wrapper className="program-rank">
      <ThemeHeaderDj
        more={{text: "更多 >", to: "/discover/diradio/rank"}}
        title={{text: "节目排行榜", to: "/discover/diradio/rank"}}
        showDjText={false}
      />
      <div className="rank-list">
        <ul>{
          dataList?.map((item, index) => {
            return (
              <Li lastRank={item.lastRank} rankDiff={(index + 1) - item.lastRank}
                  key={item.program.id}
                  className="rank-list-item">
                <div className="rank">
                  <em>{"0" + (index + 1)}</em>
                  <span>
                    <i className="sprite_icon2 icon"/>
                    {
                      item.lastRank !== -1
                      && Math.abs((index + 1) - item.lastRank)
                    }
                  </span>
                </div>
                <div className="play">
                  <img src={item.program.coverUrl + "?param=40y40"} alt=""/>
                  <i className="icon sprite_icon"/>
                </div>
                <div className="desc">
                  <h3 className="text-nowrap"
                      title={item.program.name}>
                    <Link to={"/discover/djradio/program?id=" + item.program.id}>{item.program.name}</Link>
                  </h3>
                  <p className="text-nowrap">
                    <Link to={"/discover/djradio/detail?id=" + item.program.radio.id}>{item.program.radio.name}</Link>
                  </p>
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
});

ProgramRank.propTypes = {};
ProgramRank.defaultProps = {};

export default ProgramRank;
