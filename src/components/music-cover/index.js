import React, { memo } from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { LMusicCoverWrapper } from './style';


import { getFormatImage, getFormatCount } from '@/utils/format-utils';

const LMusicCover = memo(function LMusicCover(props) {
  const {info, multiline, style, onPlay} = props
  
  return (
    <LMusicCoverWrapper style={{...style}}>
      <div className="cover">
        <img title={info.desc} src={getFormatImage(info.imgUrl, 140)} alt=""/>
        <Link to={"/discover/playlist/" + info.id} title={info.desc} className="sprite_cover mask"/>
        <div className="bottom  sprite_cover">
          <span className="sprite_icon headset"/>
          <span className="count">{getFormatCount(info.playCount)}</span>
          <span className="sprite_icon play" onClick={e => onPlay(info.id)}>play</span>
        </div>
      </div>
      {
        multiline
          ? <>
            <p className="multi-desc text-nowrap">
              <Link title={info.desc} to={"/discover/playlist/" + info.id}>{info.desc}</Link>
            </p>
            <p className="auth text-nowrap">
              <span>by</span>
              <Link
                to={"/home?id=" + info.copywriter.id}
                title={info.copywriter.name}>
                {info.copywriter.name}
                {info.copywriter.avatarDetailImg &&
                <img style={{height: "13px", marginLeft: "5px"}} src={info.copywriter.avatarDetailImg} alt=""/>}
              </Link>
            </p>
          </>
          : <p className="desc">
            <Link
              to={"/discover/playlist/" + info.id}
              title={info.desc}>
              {info.type === 1 ? <i className="dj sprite_icon2"/> : ""}
              {info.desc}
            </Link>
          </p>
      }
    </LMusicCoverWrapper>
  )
})
LMusicCover.propTypes = {
  multiline: PropTypes.bool,
  info: PropTypes.exact({
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    copywriter: PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatarDetailImg: PropTypes.string
    }),
    playCount: PropTypes.number.isRequired,
    type: PropTypes.number
  }).isRequired,
  onPlay: PropTypes.func
}

LMusicCover.defaultProps = {
  multiline: false,
  info: {
    playCount: 0
  },
  onPlay: () => {
  }
}
export default LMusicCover;
