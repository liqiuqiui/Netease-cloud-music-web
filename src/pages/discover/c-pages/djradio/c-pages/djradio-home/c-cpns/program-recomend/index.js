//lib
import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"
import ThemeHeaderDj from "../../../../../../../../components/theme-header-dj";
import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProgramRecommend = memo(function ProgramRecommend(props) {
  const dataList = useSelector(state => state.getIn(["djRadio", "programRecommendList"]).programs, shallowEqual);
  useEffect(() => {
    console.log(dataList)
  }, [dataList])
  return (
    <Wrapper>
      <ThemeHeaderDj
        title={{
          text: "推荐节目",
          to: "/discover/djradio/recommend"
        }}
        more={{
          text: "更多 >",
          to: "/discover/djradio/recommend"
        }}
        showDjText={false}/>
      <div className="recommend-list">
        <ul>
          {
            dataList?.slice(0, 10)?.map(item => {
              return (
                <li key={item.id} className="list-item">
                  <div className="list-item-left">
                    <img src={item.coverUrl + "?param=40y40"} alt=""/>
                    <i className="icon sprite_icon"/>
                  </div>
                  <div className="list-item-center">
                    <h3 className="list-item-center-top text-nowrap" title={item.name}>
                      <Link to={"/discover/djradio/program?id=" + item.id}>{item.name}</Link>
                    </h3>
                    <p className="list-item-center-bottom text-nowrap">
                      <Link to={"/discover/djradio/detail?id=" + item.radio.id}>{item.radio.name}</Link>
                    </p>
                  </div>
                  <Link
                    to={"/discover/djradio/category?id=" + item.categoryId}
                    className="list-item-right">{item.radio.category}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </Wrapper>
  )
});

ProgramRecommend.propTypes = {};
ProgramRecommend.defaultProps = {};

export default ProgramRecommend;
