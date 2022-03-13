//lib
import React, { memo } from "react";
import Proptype from "prop-types";

//components
import { Wrapper } from "./style";

const AlbumDetail = memo(function AlbumDetail() {
  return (
    <Wrapper className="wrap-v2">
      专辑详情
    </Wrapper>
  );
});

AlbumDetail.propTypes = {};
AlbumDetail.defaultProps = {};

export default AlbumDetail;
