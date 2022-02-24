import React, { memo } from 'react';

import { getFormatImage } from '@/utils/format-utils';

import { AlbumWrapper } from './style';
import { Link } from "react-router-dom";

export default memo(function HYAlbumCover(props) {
  // state and props
  const { info, size = 130, width = 153, bgp = "-845px" } = props;
  // console.log(info)
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getFormatImage(info.picUrl, size)} alt="" />
        <Link to={"/album?id="+info.id} className="cover image_cover">{info.name}</Link>
      </div>
      <div className="album-info">
        <Link to={"/album?id="+info.id} className="name text-nowrap">{info.name}</Link>
        <Link to={"/artist?id="+info.artist.id} className="artist text-nowrap">{info.artist.name}</Link>
      </div>
    </AlbumWrapper>
  )
})
