//lib
import React, { memo } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js";
import Operates from "@/components/operates";
import { formatMonthDay } from "@/utils/format-utils";
import { shallowEqual, useSelector } from "react-redux";
import {
  useChangeWholePlaylistAndPlayBack,
  useAddAllToPlaylist
} from "@/hooks";

const ListHead = memo(function ListHead(props) {
  const {headData} = props;
  const changeWholePlaylistAndPlayBack = useChangeWholePlaylistAndPlayBack();
  const addAllToPlaylist = useAddAllToPlaylist();
  const songList = useSelector(state => (state.getIn(["toplist", "topListDataList"])), shallowEqual)
  
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
          onPlayMusic={e => changeWholePlaylistAndPlayBack(songList.tracks)}
          onAddToPlaylist={e=> addAllToPlaylist(songList.tracks)}
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
