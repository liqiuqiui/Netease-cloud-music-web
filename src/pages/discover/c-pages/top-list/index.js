//lib
import React, { memo } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"
import TopListLeft from "./c-cpns/top-list-left";
import TopListRight from "./c-cpns/top-list-right";

const TopList = memo(function TopList(props) {
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
