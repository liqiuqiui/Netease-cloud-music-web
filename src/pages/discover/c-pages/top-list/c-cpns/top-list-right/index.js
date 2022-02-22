//lib
import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

//components
import { Wrapper } from "./style.js"
import ListHead from "./c-cpns/list-head";
import ListBody from "./c-cpns/list-body";
// requests
import { getPlaylistComment, getTopListDetail } from "../../../../../../services/top-list";
//utils
import queryStringParser from "../../../../../../utils/queryStringParser";
import { formatMonthDay } from "../../../../../../utils/format-utils";
import { shallowEqual, useSelector } from "react-redux";
import Comment from "../../../../../../components/comment";

const TopListRight = memo(function TopListRight(props) {
  const location = useLocation()
  const [headData, setHeadData] = useState({});
  const id = queryStringParser(location.search).id || 19723756;
  const [pageNum, setPageNum] = useState(1);
  const [commentInfo, setCommentInfo] = useState({});
  
  const {topList1, topList2} = useSelector(state => ({
    topList1: state.getIn(["toplist", "topList"]),
    topList2: state.getIn(["toplist", "topListDataList"])
  }), shallowEqual);
  
  useEffect(() => {
    const res = topList1.find(i => i.id === +id);
    setHeadData({
      imgUrl: res?.coverImgUrl,
      name: res?.name,
      time: res?.updateTime,
      frequency: res?.updateFrequency,
      favorCount: res?.subscribedCount,
      shareCount: topList2?.shareCount,
      commentCount: topList2?.commentCount,
    });
  }, [topList1, id, topList2]);
  useEffect(() => {
    getPlaylistComment({id, offset: (pageNum - 1) * 20})
    .then(res => {
      setCommentInfo(res)
      console.log(res)
    })
  }, [pageNum, id])
  return (
    <Wrapper>
      <ListHead headData={headData}/>
      <ListBody/>
      <div className="playlist-comment" style={{padding: "0 30px 40px 40px"}}>
        <Comment onPageChange={v => setPageNum(v)} commentInfo={commentInfo} currentPage={pageNum}/>
      </div>
    </Wrapper>
  )
});

TopListRight.propTypes = {};
TopListRight.defaultProp = {};

export default TopListRight;
