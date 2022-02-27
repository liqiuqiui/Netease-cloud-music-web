//lib
import React, { memo } from "react";

//components
import { Wrapper } from "./style";
import HotAlbum from "./c-cpns/hot-album";
import AllAlbum from "./c-cpns/all-album";

const Album = memo(function Album(props) {
  return (
    <Wrapper className="album wrap-v2">
      <HotAlbum/>
      <AllAlbum/>
    </Wrapper>
  )
});

Album.propTypes = {};
Album.defaultProps = {};

export default Album;
