import React, { memo, useCallback, useState } from "react";
import PropTypes from "prop-types";
import { CommentWrapper } from "./style.js";
import SendComment from "./c-cpns/send-comment";
import CommentItem from "./c-cpns/comment-item";
import Pagination from "../pagination";
// import CommentBody from "./c-cpns/comment-body";


const Comment = memo(function Comment(props) {
  const {commentInfo: {comments, hotComments, total}, pageSize, currentPage, onPageChange} = props;
  // const [currentPage, setCurrentPage] = useState(1);
  // console.log("hot")
  // const hotArr = [];
  // hotComments?.length && hotComments.forEach((item) => {
  //   const {user: {userId, nickname, userType, vipType, vipRights = {}}} = item;
  //   const {associator = {}, musicPackage = null, redVipAnnualCount, redVipLevel} = vipRights || {};
  //   const {vipCode: assVipCode, rights: assRights} = associator || {}
  //   const {vipCode: pkgVipCode, rights: pkgRights} = musicPackage || {}
  //   // console.log(item.user)
  //   hotArr.push({
  //     userId,
  //     nickname,
  //     userType,
  //     vipType,
  //     assVipCode,
  //     assRights,
  //     pkgVipCode,
  //     pkgRights,
  //     redVipAnnualCount,
  //     redVipLevel
  //   })
  // })
  // console.table(hotArr)
  // console.log("least")
  // const leastArr = [];
  // comments?.length && comments.forEach((item) => {
  //   const {user: {userId, nickname, userType, vipType, vipRights = {}}} = item;
  //   const {associator = {}, musicPackage = null, redVipAnnualCount, redVipLevel} = vipRights || {};
  //   const {vipCode: assVipCode, rights: assRights} = associator || {}
  //   const {vipCode: pkgVipCode, rights: pkgRights} = musicPackage || {}
  //   // console.log(item.user)
  //   leastArr.push({
  //     userId,
  //     nickname,
  //     userType,
  //     vipType,
  //     assVipCode,
  //     assRights,
  //     pkgVipCode,
  //     pkgRights,
  //     redVipAnnualCount,
  //     redVipLevel
  //   })
  // })
  // console.table(leastArr)
  // const pageNum = 1;
  // const onPageChange = useCallback((newPage, pageSize) => {
  //   console.log("page:", newPage, "pageSize:", pageSize)
  //   setCurrentPage(newPage)
  // },[setCurrentPage])
  return (
    <CommentWrapper>
      <SendComment commentNum={total || 0}/>
      {currentPage === 1 &&!!hotComments?.length&& <>
        <h3 className="comment-title">最热评论</h3>
        {
          hotComments?.map((item) => {
            return <CommentItem commentObj={item} key={item.commentId}/>
          })
        }
        <br/><br/>
        <h3 className="comment-title">最新评论({total})</h3>
      </>}
      {comments?.map((item) => {
        return <CommentItem commentObj={item} key={item.commentId}/>
      })}
      <Pagination
        pageSize={pageSize}
        total={total || 0}
        onChange={onPageChange}
        currentPage={currentPage}/>
    </CommentWrapper>
  )
});
Comment.propTypes = {
  commentInfo: PropTypes.object.isRequired,
  pageSize: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
}
Comment.defaultProps = {
  pageSize: 20
}
export default Comment;
