import React, { memo, useState } from "react";
import PropTypes from "prop-types";

import { SongInfoWrapper, SongInfoRight, SongInfoLeft } from "./style.js";
// import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import { addToPlayListAndPlayBackAction, changePlaybackStateAction } from "../../../../../player/store";
import { usePlayMusic, useAddToPlayList } from "@/hooks";
import Operates from "../../../../../../components/operates";
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
              {songDetail?.mv>0&&<Link to="#" className="mv sprite_icon2" title="播放mv" />}
              {songDetail?.tns?.length>0&&<div className="alias">{songDetail?.tns[0]}</div>}
            </div>
          </div>
          <p className="singer-name">
            歌手：
            {
              songDetail?.ar?.map((item, index) => {
                return (<span key={item.id}>
                  {index === 0 ? "" : " / "}
                  <a>{item.name}</a>
                </span>)
              })
            }
          </p>
          <p>所属专辑：<a>{songDetail?.al?.name}</a></p>
          
          {/*<div className="operates">*/}
          {/*  <div className="sprite_button" onClick={e => playMusic(params.id)}>*/}
          {/*    <i className="sprite_button"><em className="sprite_button"/>播放</i>*/}
          {/*  </div>*/}
          {/*  <div className="sprite_button" onClick={e => addToPlayList(params.id)}/>*/}
          {/*  <div className="sprite_button"><i className="sprite_button">收藏（12343）</i></div>*/}
          {/*  <div className="sprite_button"><i className="sprite_button">分享</i></div>*/}
          {/*  <div className="sprite_button"><i className="sprite_button">下载</i></div>*/}
          {/*  <div className="sprite_button"><i className="sprite_button">（<span>15488</span>）</i></div>*/}
          {/*</div>*/}
          <Operates/>
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
