//lib
import React, { memo } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper, Right, Left } from "./style.js"

const PlaylistDetail = memo(function PlaylistDetail(props) {
  return (
    <Wrapper className="wrap-v2">
      <Left>左边</Left>
      <Right>右边</Right>
    </Wrapper>
  )
});

PlaylistDetail.propTypes = {};
PlaylistDetail.defaultProps = {};

export default PlaylistDetail;
