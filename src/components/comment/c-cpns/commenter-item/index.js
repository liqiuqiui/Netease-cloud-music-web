import React, { memo } from "react";

import { vipMap } from "../../../../common/local-data";
import PropTypes from "prop-types";

const CommenterItem = memo(function CommenterItem(props) {
  const {user, content} = props;
  return (
    <>
      <a href="" className="commenter">{user?.nickname}</a>
      {/*音乐包*/}
      {user?.vipRights?.musicPackage?.rights &&
      <img src="//p1.music.126.net/G2KYG9JjrGGP5grSaXOZaw==/109951163309837705.png"
           className="music-package" alt=""/>}
      {/**/}
      {user?.avatarDetail &&
      <img src={user?.avatarDetail?.identityIconUrl} alt=""/>}
      {/*黑胶vip*/}
      {user?.vipRights?.associator?.rights &&
      <img src={vipMap.get(user?.vipRights?.redVipLevel)} alt=""/>}
      ：
      {/*评论内容*/}
      <span className="text">{content}</span>
    </>
  )
});
CommenterItem.propTypes = {
  user: PropTypes.object.isRequired,
  content: PropTypes.any.isRequired
}
export default CommenterItem;
