import React, { memo, useState } from "react";
import PropTypes from "prop-types";

import { SongInfoWrapper, SongInfoRight, SongInfoLeft } from "./style.js";
// import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import { addToPlayListAndPlayBackAction, changePlaybackStateAction } from "../../../../../player/store";
import { usePlayMusic, useAddToPlayList } from "@/hooks";
import Operates from "../../../../../../components/operates";
import Singer from "../../../../../../components/singer";
// import { shallowEqual, useSelector } from "react-redux";

const SongInfo = memo(function SongInfo(props) {
  // const dispatch = useDispatch();
  const params = useParams();
  const playMusic = usePlayMusic();
  const addToPlayList = useAddToPlayList();
  // const {currentSong, lyricList} = useSelector(state => ({
  //   currentSong: state.getIn(["player", "currentSong"]),
  //   lyricList: state.getIn(["player", "lyricList"])
  // }), shallowEqual);
  const {songDetail, songLyric: {lyricList, transUser}} = props;
  const [isShowMoreLyric, setIsShowMoreLyric] = useState(false);
  // console.log(transUser)
  // console.log(songDetail)
  // console.log(songComments)
  const handleSpreadClick = () => {
    setIsShowMoreLyric(v => !v);
  }
  
  // const handlePlayMusic = () => {
  //
  //   play()
  //   // dispatch(addToPlayListAndPlayBackAction(params.id));
  //   // // console.log(params)
  //   // dispatch(changePlaybackStateAction(true));
  // }
  return (
    <SongInfoWrapper>
      <div className="info">
        <SongInfoLeft>
          <div className="cover-wrap">
            <img src={songDetail?.al?.picUrl + "?param=130y130"} alt=""/>
            <div className="mask sprite_cover"/>
          </div>
          <div className="out">
            <i className="sprite_icon2"/>
            <a href="#">生成外链播放器</a>
          </div>
        </SongInfoLeft>
        <SongInfoRight isShowMoreLyric={isShowMoreLyric}>
          <div className="song-name">
            <div className="sprite_icon2 ico"/>
            <div className="name">
              <em>{songDetail?.name}</em>
              {songDetail?.mv > 0 && <Link to={"/discover/mv/"+songDetail.mv} className="mv sprite_icon2" title="播放mv"/>}
              {songDetail?.tns?.length > 0 && <div className="alias">{songDetail?.tns[0]}</div>}
            </div>
          </div>
          <p className="singer-name">
            歌手：
            {<Singer singerList={songDetail?.ar} />}
          </p>
          <p>所属专辑：<Link to={"/discover/album-detail/"+songDetail?.al?.id}>{songDetail?.al?.name}</Link></p>
          <Operates onPlayMusic={e=>playMusic(songDetail.id)} onAddToPlaylist={e=>addToPlayList(songDetail.id)} />
          <div className="lyric-content" style={{
            height: isShowMoreLyric ? "auto" : 20 * 10 + "px"
          }}>
            {
              lyricList?.map((i, idx) => {
                return (<p key={i.time + i.content.origin}>
                  {i.content.origin}
                  {<br/>}
                  {i.content.translate}
                  {idx && i.content.translate > 0 ? <br/> : ""}
                </p>)
              })
            }
          </div>
          <div className="show-more" onClick={handleSpreadClick}>
            {isShowMoreLyric ? "收起" : "展开"}
            <i className="sprite_icon2" style={{
              backgroundPositionX: isShowMoreLyric ? "-45px" : "-65px"
            }}/>
          </div>
        </SongInfoRight>
      </div>
      <div className="feedback">
        <a rel="noopener noreferrer"
           target="_blank"
           href={"https://music.163.com/#/lyric/report?id=" + songDetail.id}>报错</a>
      </div>
      {transUser && <p className="trans-user">贡献翻译：<a>{transUser.nickname}</a></p>}
    </SongInfoWrapper>
  )
});
SongInfo.propTypes = {
  songDetail: PropTypes.object.isRequired,
  songLyric: PropTypes.object.isRequired
}
export default SongInfo
