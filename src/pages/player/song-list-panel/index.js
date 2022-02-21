//lib
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import propTypes from "prop-types";

//actions
import { changePlayListAction } from "../store/actionCreators";

//components
import { SongListPanelWrapper } from "./style.js";
import ListPanel from "./c-cpns/list-panel"
import LyricPanel from "./c-cpns/lyric-panel";

const SongListPanel = memo(function SongListPanel(props) {
  //redux hooks
  const dispatch = useDispatch();
  const {playList, currentSongIndex, currentSong} = useSelector(state => ({
    playList: state.getIn(["player", "playList"]),
    currentSongIndex: state.getIn(["player", "currentSongIndex"]),
    currentSong: state.getIn(["player", "currentSong"]),
  }), shallowEqual);
  
  //react hooks
  useEffect(() => {
    console.log("panel rerender")
  })
  // handle func
  const handleClearPlayListClick = () => {
    dispatch(changePlayListAction([]));
  }
  return (
    <SongListPanelWrapper {...props} className="song-list-panel">
      <div className="list-head">
        <h4>播放列表（{playList.length}）</h4>
        <i className="add-all">
          <span className="sprite_playlist favor"/>
          收藏全部
        </i>
        <span className="line"/>
        <i className="clear" onClick={handleClearPlayListClick}>
          <span className="sprite_playlist ico"/>
          清除
        </i>
        {/*<p>{playList.length > 0 && playList[currentSongIndex].name}</p>*/}
        <p>{currentSong?.name}</p>
        <span onClick={props?.closeSongListPanel} className="close sprite_playlist"/>
      </div>
      <div className="list-body sprite_playlist">
        <img className="bg-img"
             src={"//music.163.com/api/img/blur/" + currentSong?.al?.pic_str}
             alt=""/>
        <ListPanel/>
        <LyricPanel/>
      </div>
    </SongListPanelWrapper>
  )
});

SongListPanel.propTypes = {
  isShowSongListPanel: propTypes.bool.isRequired,
  closeSongListPanel: propTypes.func.isRequired
}

export default SongListPanel;
