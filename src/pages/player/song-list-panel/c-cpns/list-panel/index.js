import React, { memo, useEffect } from "react";

import { ListPanelWrapper, SongItem } from "./style";
import {
  changePlaybackStateAction,
  changeCurrentSongAction,
  changeCurrentSongIndexAction,
  removeSongFromPlayListAction, getSongLyricAction
} from "../../../store";
import { formatMinuteSecond } from "@/utils/format-utils";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { NavLink } from "react-router-dom";
import Singer from "../../../../../components/singer";
// import { changeCurrentSongAction, changeCurrentSongIndexAction } from "../../../store/actionCreators";

export default memo(function ListPanel(props) {
  const dispatch = useDispatch();
  const {playList, currentSongIndex} = useSelector(state => ({
    playList: state.getIn(["player", "playList"]),
    currentSongIndex: state.getIn(["player", "currentSongIndex"])
  }), shallowEqual);
  useEffect(() => {
    console.log("list panel render");
  })
  // func
  const handlePlayClick = (index) => {
    // dispatch(addToPlayListAndPlayBackAction(song.id));
    if(index===currentSongIndex) return;
    console.log("在列表切歌")
  
    dispatch(changeCurrentSongAction(playList[index]));
    dispatch(changeCurrentSongIndexAction(index));
    dispatch(getSongLyricAction(playList[index].id));
    dispatch(changePlaybackStateAction(true));
  }
  const handleRemoveSongClick = (id,e) => {
    dispatch(removeSongFromPlayListAction(id));
    e.stopPropagation()
  }
  return (
    <ListPanelWrapper className="list-body-wrap">
      {playList.length > 0 && (
        <>
          <div className="msk"/>
          <ul className="list-body-left">{
            playList.map((song, index) => {
              return (
                <SongItem onClick={e => handlePlayClick(index)}
                          currentIndex={currentSongIndex} index={index}
                          key={song.id}>
                  <div className="col col1">
                    <div className="play-ico sprite_playlist"/>
                  </div>
                  <div className="col col2 text-nowrap">{song.name}</div>
                  <div className="col col3">
                    <i className="ico favor">收藏</i>
                    <i className="ico share">分享</i>
                    <i className="ico dl">下载</i>
                    <i className="ico del" onClick={e => handleRemoveSongClick(song.id,e)}>删除</i>
                  </div>
                  <div className="col col4 text-nowrap">
                    <Singer singerList={song.ar} splitSpace={false} />
                  {/*  <span className="singer-name">{*/}
                  {/*  song.ar.map(i => i.name).join("/")*/}
                  {/*}</span>*/}
                  </div>
                  <div className="col col5">{formatMinuteSecond(song.dt)}</div>
                  <div className="col col6"><span className="sprite_playlist from"/></div>
                </SongItem>
              )
            })
          }</ul>
        </>
      )}
      {playList.length <= 0 && <div className="no-content">
        <i className="ico sprite_playlist"/>
        你还没有添加任何歌曲
        <br/>
        去首页<NavLink to="/discover">发现音乐</NavLink>
        或在 <NavLink to="/my">我的音乐</NavLink>
        收听自己收藏的歌单。
      </div>}
    </ListPanelWrapper>
  )
});
