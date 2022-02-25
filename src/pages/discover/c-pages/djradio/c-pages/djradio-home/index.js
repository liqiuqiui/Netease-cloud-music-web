//lib
import React, { memo } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"
import ProgramRecommend from "./c-cpns/program-recomend";
import ProgramRank from "./c-cpns/program-rank";
import CateRecommend from "./c-cpns/cate-recommend";
import { useSelector } from "react-redux";

const DjRadioHome = memo(function DjRadioHome(props) {
  const cateRecommendList = useSelector(state => state.getIn(["djRadio", "cateRecommendList"]));
  return (
    <Wrapper className="dj-radio-home">
      <div className="program">
        <ProgramRecommend/>
        <ProgramRank/>
      </div>
      {
        cateRecommendList?.map(item => {
          const dataList = item.djRadios.map(item => {
            return {
              imgUrl: item.picUrl + "?param=120y120",
              id: item.id,
              title: item.name,
              desc: item.rcmdtext
            }
          })
          return (
            <CateRecommend
              key={item.id}
              dataList={dataList}
              more={{text: "更多 >", to: "/discover/djradio/category?id=" + item.id}}
              title={{text: item.name, to: "/discover/djradio/category?id=" + item.id}}
            
            />)
        })
      }
    </Wrapper>
  )
});

DjRadioHome.propTypes = {};
DjRadioHome.defaultProps = {};

export default DjRadioHome;
