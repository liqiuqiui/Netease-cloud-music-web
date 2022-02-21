import React, { memo } from "react";

import { UserProfileWrapper } from "./style";

export default memo(function LUserProfile(props) {
  return (
    <UserProfileWrapper className="sprite_02" >
      <p className="my-info ">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a className="btn sprite_02" href="#">用户登录</a>
    </UserProfileWrapper>
  );
})
