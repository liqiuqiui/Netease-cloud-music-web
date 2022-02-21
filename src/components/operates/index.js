//lib
import React, { memo } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"

const Operates = memo(function Operates(props) {
  const {onPlayMusic, onAddToPlayList, playText, favorText, shareText, downloadText, commentText} = props;
  return (
    <Wrapper>
      {/*<div className="operates">*/}
      <div className="sprite_button" onClick={onPlayMusic}>
        <i className="sprite_button"><em className="sprite_button"/>{playText}</i>
      </div>
      <div className="sprite_button" onClick={onAddToPlayList}/>
      <div className="sprite_button"><i className="sprite_button">{favorText}</i></div>
      <div className="sprite_button"><i className="sprite_button">{shareText}</i></div>
      <div className="sprite_button"><i className="sprite_button">{downloadText}</i></div>
      <div className="sprite_button"><i className="sprite_button">{commentText}</i></div>
      {/*</div>*/}
    
    </Wrapper>
  )
});

Operates.propTypes = {
  playText: PropTypes.string,
  favorText: PropTypes.string,
  shareText: PropTypes.string,
  downloadText: PropTypes.string,
  commentText: PropTypes.string,
  
  onPlayMusic: PropTypes.func,
  onAddToPlayList: PropTypes.func
};
Operates.defaultProps = {
  playText: "播放",
  favorText: "收藏",
  shareText: "分享",
  downloadText: "下载",
  commentText: "评论",
};

export default Operates;
