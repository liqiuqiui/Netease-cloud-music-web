//lib
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"
import { Link, useLocation } from "react-router-dom";
import ThemeHeaderDj from "../../../../../../components/theme-header-dj";
import queryStringParser from "../../../../../../utils/queryStringParser";
import { getNewRadioAction, getRadioTopListAction } from "../../store/actionCreators";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import LPagination from "../../../../../../components/pagination";

const DjRadioCategory = memo(function DjRadioCategory(props) {
  const {search} = useLocation();
  const query = queryStringParser(search);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const radioRankRef = useRef();
  useEffect(() => {
    //get excellent new radio data
    dispatch(getNewRadioAction(query.id));
    //获取电台排行榜数据
    dispatch(getRadioTopListAction({
      cateId: query.id,
      limit: 30,
      offset: (page - 1) * 30
    }));
  }, [search, page]);
  
  //获取redux中的数据
  const {newRadioList, radioTopList, total} = useSelector(state => ({
    newRadioList: state.getIn(["djRadio", "newRadio"]),
    radioTopList: state.getIn(["djRadio", "radioTopList"]).djRadios,
    total: state.getIn(["djRadio", "radioTopList"]).count || 0
  }), shallowEqual);
  
  const pageChange = useCallback((page) => {
    setPage(page);
    window.scrollTo(0, radioRankRef.current.offsetTop);
  }, [setPage])
  return (
    <Wrapper className="djradio-category">
      {/* 优秀新电台 */}
      <div className="excellent-new-radio">
        <ThemeHeaderDj title="优秀新电台" showDjText={false}/>
        <ul className="new-radio-list">{
          newRadioList?.slice(0, 5)?.map(item => {
            return (
              <li key={item.id} className="new-radio-list-item">
                <Link to={"/discover/djradio/detail?id=" + item.id}>
                  <img src={item.picUrl + "?param=150y150"} alt=""/>
                </Link>
                <h3 className="title text-nowrap" title={item.name}>
                  <Link to={"/discover/djradio/detail?id=" + item.id}>{item.name}</Link>
                </h3>
                <p className="text-nowrap">{item.rcmdtext}</p>
              </li>
            )
          })
        }</ul>
      </div>
      {/* 排行榜 */}
      <div className="radio-rank" ref={radioRankRef}>
        <ThemeHeaderDj showDjText={false} title="电台排行榜" rightElement={
          <div>
            <span>上升最快</span>
            <i className="line">|</i>
            <span style={{color: "#c20c0c"}}>最热电台</span>
          </div>
        }/>
        <ul className="rank-list">{
          radioTopList?.map(item => {
            return (
              <li key={item.id} className="rank-list-item">
                <Link to={"/discover/djradio/detail?id=" + item.id} className="rank-list-item-left">
                  <img src={item.picUrl + "?param=120y120"} alt=""/>
                </Link>
                <div className="rank-list-item-right">
                  <h3 className="title text-nowrap" title={item.name}>
                    <Link to={"/discover/djradio/detail?id=" + item.id}>{item.name}</Link>
                  </h3>
                  <p className="author">
                    <i className="user-icon sprite_icon2"/>
                    <Link className="name" to={"/user/home?id=" + item.dj.userId}>{item.dj.nickname}</Link>
                    {item?.dj?.avatarDetail && <img src={item?.dj?.avatarDetail?.identityIconUrl} alt=""/>}
                  </p>
                  <p className="info">
                    共{item.programCount}期
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    订阅{item.subCount}次
                  </p>
                </div>
              </li>
            )
          })
        }</ul>
        <LPagination total={total} currentPage={page} pageSize={30} onChange={pageChange}/>
      </div>
    </Wrapper>
  )
});

DjRadioCategory.propTypes = {};
DjRadioCategory.defaultProps = {};

export default DjRadioCategory;
