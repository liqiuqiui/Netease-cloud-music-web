import React, { memo } from 'react'

import { LMusicCoverWrapper } from './style';

import { getFormatImage, getFormatCount } from '@/utils/format-utils';

export default memo(function LMusicCover(props) {
  const { info } = props

  return (
    <LMusicCoverWrapper>
      <div className="cover">
        <img src={getFormatImage(info.picUrl, 140)} alt="" />
        <a href="todo" title={info.name} className="sprite_cover mask"></a>
        <div className="bottom  sprite_cover">
          <span className="sprite_icon headset"></span>
          <span className="count">{getFormatCount(info.playCount)}</span>
          <a className="sprite_icon play" href="todo">play</a>
        </div>
      </div>
      <p className="desc">
        <a href="todo" title={info.name} >{info.type===1?<i className="dj sprite_icon2"/>:""}{info.name}</a>
      </p>
      {/*<p className="auth text-nowrap">*/}
      {/*  <span>by</span>*/}
      {/*  <a href="todo" title={info.copywriter} >{info.copywriter}</a>*/}
      {/*</p>*/}
    </LMusicCoverWrapper>
  )
})
