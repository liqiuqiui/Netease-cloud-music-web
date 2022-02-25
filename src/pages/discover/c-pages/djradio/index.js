//lib
import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"
import DjRadioCategoryList from "./c-cpns/djradio-category-list";
import { renderRoutes } from "react-router-config";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getCateRecommendListAction,
  getDjRadioCategoriesAction,
  getProgramRankListAction,
  getProgramRecommendListAction
} from "./store/actionCreators";

const DjRadio = memo(function DjRadio(props) {
  const {pathname} = useLocation();
  const isShowCategoryList = /category|djradio$/.test(pathname);
  console.log("路径", isShowCategoryList, pathname)
  const dispatch = useDispatch();
  
  useEffect(() => {
    //获取分类列表
    dispatch(getDjRadioCategoriesAction());
    //获取节目排行榜列表
    dispatch(getProgramRankListAction());
    //获取节目推荐列表
    dispatch(getProgramRecommendListAction());
    //获取分类推荐列表
    dispatch(getCateRecommendListAction([2, 6, 3, 2001, 11]))
    // getCateRecommendList()
  }, [dispatch]);
  
  return (
    <Wrapper className="wrap-v2">
      {isShowCategoryList && <DjRadioCategoryList/>}
      {renderRoutes(props.route.routes)}
    </Wrapper>
  )
});

DjRadio.propTypes = {};
DjRadio.defaultProps = {};

export default DjRadio;
