import React, { memo } from 'react';
import { string } from "prop-types"
import { getFormatImage } from '@/utils/format-utils';

import { AlbumWrapper } from './style';
import { Link } from "react-router-dom";
import Singer from "../singer";

const AlbumCover = memo(function AlbumCover(props) {
  // state and props
  const {info, size = 130, width = 153, bgp = "-845px", style} = props;
  // console.log(info)
  return (
    <AlbumWrapper style={style} size={size} width={width} bgp={bgp}>
      <div className="album-image" title={info.name}>
        <img src={getFormatImage(info.picUrl, size)} alt=""/>
        <Link to={"/discover/album-detail/" + info.id} className="cover image_cover">{info.name}</Link>
      </div>
      <div className="album-info">
        <div className="name text-nowrap"><Link
          title={info.name}
          to={"/discover/album-detail/" + info.id}>
          {info.name}
        </Link>
        </div>
        <div className="artist text-nowrap">
          <Singer singerList={info.artists} splitSpace={true}/>
        </div>
      </div>
    </AlbumWrapper>
  )
})

export default AlbumCover;
