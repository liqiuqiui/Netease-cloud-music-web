import React, { memo, useState } from "react";
// import { Mentions } from "antd";
import { SendCommentWrapper } from "./style.js";
import PropTypes from "prop-types";

const SendComment = memo(function SendComment(props) {
  const {commentNum} = props;
  const [restCharNum, setRestCharNum] = useState(140);
  const [commentText, setCommentText] = useState("");
  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
    setRestCharNum(140 - e.target.value?.trim().length);
    // console.log(e.target.value)
  };
  const handleFocus = (e) => {
    e.target.blur();
  }
  return (
    <SendCommentWrapper>
      <div className="title"><h3>评论</h3> <span>共{commentNum}条评论</span></div>
      <div className="content">
        <div className="avatar left">
          <img src="https://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50"/>
        </div>
        <div className="right">
          <div className="text">
            <textarea onFocus={handleFocus} value={commentText} onChange={handleCommentChange} placeholder="评论"
                      rows="3"/>
            <i/>
          </div>
          <div className="bottom">
            <div className="bottom-left">
              <i className="emoji sprite_icon2"/>
              <i className="at sprite_icon2"/>
            </div>
            <div className="bottom-right">
              <span style={restCharNum < 0 ? {color: "#c20c0c"} : {}}>{restCharNum}</span>
              <button className="sprite_button2">评论</button>
            </div>
          </div>
        </div>
      </div>
    </SendCommentWrapper>
  )
});

SendComment.propTypes = {
  commentNum: PropTypes.number.isRequired
}
export default SendComment;
