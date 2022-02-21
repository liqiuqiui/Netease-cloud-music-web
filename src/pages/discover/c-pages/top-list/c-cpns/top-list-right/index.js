//lib
import React, { memo } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"
import ListHead from "./c-cpns/list-head";
import ListBody from "./c-cpns/list-body";

const TopListRight = memo(function TopListRight(props) {
  return (
    <Wrapper>
      <ListHead/>
      <ListBody/>
    </Wrapper>
  )
});

TopListRight.propTypes = {};
TopListRight.defaultProp = {};

export default TopListRight;
