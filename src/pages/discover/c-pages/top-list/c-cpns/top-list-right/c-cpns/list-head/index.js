//lib
import React, { memo } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js";
import Operates from "../../../../../../../../components/operates";
import { formatMonthDay } from "../../../../../../../../utils/format-utils";

const ListHead = memo(function ListHead(props) {
  const {headData} = props;
  return (
    <Wrapper className="list-head">
      <div className="head-left">
        <img src={headData.imgUrl + "?param=150y150"} alt=""/>
        <div className="mask sprite_cover"/>
      </div>
      <div className="head-right">
        <h2 className="list-name">{headData.name}</h2>
        <div className="update-time">
          <i className="sprite_icon2"/>
          <span>最近更新：{headData.time && formatMonthDay(headData.time)}</span>
          <span>{typeof headData.frequency !== "undefined" ? `（${headData.frequency}）` : ""}</span>
        </div>
        <Operates
          favorText={typeof headData.favorCount !== "undefined" ? `(${headData.favorCount})` : ""}
          commentText={typeof headData.commentCount !== "undefined" ? `(${headData.commentCount})` : ""}
          shareText={typeof headData.shareCount !== "undefined" ? `(${headData.shareCount})` : ""}
        />
      
      </div>
    </Wrapper>
  )
});

ListHead.propTypes = {
  headData: PropTypes.object.isRequired
};
ListHead.defaultProp = {};

export default ListHead;
