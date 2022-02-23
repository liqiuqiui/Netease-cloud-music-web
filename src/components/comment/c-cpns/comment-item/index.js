import React, { memo, useEffect } from "react";

import { CommentItemWrapper } from "./style.js";
import PropTypes from "prop-types";
import { vipMap } from "../../../../common/local-data";
import CommenterItem from "../commenter-item";

const CommentItem = memo(function CommentItem(props) {
  const {commentObj} = props;
  // useEffect(() => {
  //   console.log(commentObj)
  // }, [commentObj])
  return (
    <CommentItemWrapper>
      <div className="item-left">
        <img className="avatar" src={commentObj?.user?.avatarUrl + "?param=50y50"}/>
      </div>
      <div className="item-right">
        <div className="item-right-top">
          <CommenterItem user={commentObj.user} content={commentObj.content}/>
        </div>
        {/*被回复的评论*/}
        {
          commentObj?.beReplied?.length > 0 && <div className="item-right-middle">
            {commentObj?.beReplied[0]?.status === -5
              ? "该评论已删除"
              : <CommenterItem
                user={commentObj?.beReplied[0]?.user}
                content={commentObj?.beReplied[0]?.content
                }/>
            }
          </div>
        }
        <div className="item-right-bottom">
          <div className="time">{commentObj?.timeStr}</div>
          <div className="operates">
            <a><i className="sprite_icon3"/>({commentObj?.likedCount})</a>
            <span>|</span>
            <a>回复</a>
          </div>
        </div>
      
      </div>
    </CommentItemWrapper>
  )
});
CommentItem.propTypes = {
  commentObj: PropTypes.object.isRequired
}
export default CommentItem;
