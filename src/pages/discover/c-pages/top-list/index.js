//lib
import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

//components
import { Wrapper } from "./style.js"
import TopListLeft from "./c-cpns/top-list-left";
import TopListRight from "./c-cpns/top-list-right";
//actions
import { getTopListAction, getTopListDataListAction } from "./store/actionCreators";
import { useLocation } from "react-router-dom";
import queryStringParser from "../../../../utils/queryStringParser";

const TopList = memo(function TopList(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction());
  }, [dispatch]);
  
  useEffect(() => {
    const id = queryStringParser(location.search).id || 19723756;
    dispatch(getTopListDataListAction(id));
    window.scrollTo(0, 0);
  }, [dispatch, location.search])
  return (
    <Wrapper className="wrap-v2 top-list wrap-bg-left-line">
      <div className="top-list-left">
        <TopListLeft/>
      </div>
      <div className="top-list-right">
        <TopListRight/>
      </div>
    </Wrapper>
  )
});

TopList.propTypes = {};
TopList.defaultProp = {};

export default TopList;
