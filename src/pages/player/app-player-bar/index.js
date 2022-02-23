//lib
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

//action
import {
  getSongDetailAction,
  changePlaySequenceAction,
  changePlaySongAction,
  changeCurrentLyricIndexAction,
  changePlaybackStateAction,
  changePlayListAction,
  changeCurrentSongIndexAction,
  changeCurrentSongAction,
  changeSongLyricAction
} from "../store/actionCreators";

//components
import { PlayBarWrapper, PlayInfo, Operator, Control } from "./style";
import SongListPanel from "../song-list-panel";
import { Slider } from "antd";

//util
import {
  getFormatImage, formatMinuteSecond, getSongUrl
} from "@/utils/format-utils";
import useLocalStorage from "../../../utils/useLocalStorage";


export default memo(function LPlayerBar(props) {
  //state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  // const [currentLyric, setCurrentLyric] = useState("");
  const [isShowPlayBar, setIsShowPlayBar] = useState(false);
  const [isPlayBarLocked, setIsPlayBarLocked] = useState(true);
  const [isVolShow, setIsVolShow] = useState(false);
  const [volume, setVolume] = useState(1000);
  const [isShowSongListPanel, setIsShowSongListPanel] = useState(false);
  //redux hooks
  const dispatch = useDispatch();
  
  
  const {
    currentSong,
    // currentSongIndex,
    sequence,
    playList,
    lyricList,
    currentLyricIndex,
    playbackState
  } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    // currentSongIndex: state.getIn(["song-detail", "currentSongIndex"]),
    playbackState: state.getIn(["player", "playbackState"]),
    sequence: state.getIn(["player", "sequence"]),
    playList: state.getIn(["player", "playList"]),
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
  }), shallowEqual);
  
  //从本地数据初始化播放列表
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const playList = useLocalStorage("playList") || [];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const currentSongIndex = useLocalStorage("currentSongIndex") || 0;
    const currentSong = playList.length !== 0 ? playList[currentSongIndex] : {};
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const currentLyricList = useLocalStorage("currentLyricList") || [];
    dispatch(changePlayListAction(playList));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeSongLyricAction(currentLyricList));
    console.log("本地数据初始化播放列表");
  }, []);
  useEffect(() => {
    console.log("设置audio src")
    audioRef.current.src = getSongUrl(currentSong?.id);
  }, [currentSong])
  useEffect(() => {
    if (playbackState)
      audioRef.current.play().then(() => {
        dispatch(changePlaybackStateAction(true));
        console.log("播放成功")
      }).catch((err) => {
        console.log("播放失败", err)
      })
  }, [playbackState, currentSong]);
  useEffect(() => {
    audioRef.current.volume = volume / 10000;
  }, [volume])
  const audioRef = useRef();
  
  //other handle
  const picUrl = (currentSong?.al?.picUrl) || "";
  
  
  /* progress handle start */
  // console.log(lyricList[currentLyricIndex]);
  const handleTimeUpdate = e => {
    const currentTime = e.target.currentTime;
    
    setCurrentTime(currentTime);
    if (!isChanging)
      setProgress(currentTime);
    //歌词处理
    let i = 0;
    for (; i < lyricList.length; i++) {
      if (lyricList[i].time > currentTime * 1000)
        break;
    }
    
    if (currentLyricIndex !== i - 1 && i !== 0) {
      // console.log(lyricList[i - 1]);
      dispatch(changeCurrentLyricIndexAction(i - 1));
      // setCurrentLyric(lyricList[i - 1] && lyricList[i - 1].content)
    }
  }
  const handleChange = value => {
    setProgress(value);
    setIsChanging(true);
    dispatch(changePlaybackStateAction(true));
  }
  const handleAfterChange = value => {
    setCurrentTime(value);
    audioRef.current.currentTime = value;
    audioRef.current.play()
    setIsChanging(false);
    // if(!playbackState)
    // if (playbackState) musicPlay();
  }
  /* progress handle end */
  // handle switching between play and pause
  const handlePlaybackAndStop = useCallback(() => {
    if (!playbackState) {
      audioRef.current.play().then(() => {
        dispatch(changePlaybackStateAction(true))
      }).catch(err => {
        console.log("err", err)
        dispatch(changePlaybackStateAction(false))
      });
      // setPlaybackState(true)
    } else {
      audioRef.current.pause();
      dispatch(changePlaybackStateAction(false));
      // setPlaybackState(false)
    }
  }, [playbackState]);
  //改变播放顺序
  const handleChangeSequence = () => {
    console.log("change")
    dispatch(changePlaySequenceAction(sequence + 1))
  }
  const getTitle = () => {
    switch (sequence) {
      case 1:
        return "随机";
      case 2:
        return "单曲循环";
      default :
        return "循环";
    }
  }
  
  const changeMusic = (tag) => {
    //不管点击哪一个切歌，如果歌单只有一首歌，都重新播放
    if (playList.length <= 1) return handleEnded();
    dispatch(changePlaySongAction(tag));
    // console.log("切歌")
  }
  const handleEnded = () => {
    console.log("播放结束")
    setProgress(0);
    setCurrentTime(0)
    audioRef.current.currentTime = 0;
    
    if (sequence === 2 || playList.length <= 1) {
      audioRef.current.play()
    } else {
      changeMusic(1)
    }
  }
  
  const handleMouseEnter = () => {
    setIsShowPlayBar(true);
  }
  let timer = null;
  const handleMouseLeave = () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      setIsShowPlayBar(false)
    }, 2000)
  }
  
  const handleLockClick = () => {
    setIsPlayBarLocked(!isPlayBarLocked);
  }
  
  const handleVolumeChange = (val) => {
    setVolume(val)
    // audioRef.current.volume = val / 10000;
  }
  
  const lyricHandle = (currentLyricIndex) => {
    if (lyricList.length > 0 && currentLyricIndex >= 0) {
      // debugger
      //有词
      if (lyricList[currentLyricIndex].content.origin) {
        //有翻译
        const lyricObj = lyricList[currentLyricIndex].content;
        if (lyricList[currentLyricIndex].content.translate) {
          return (<>原：{lyricObj.origin}{<br/>}译：{lyricObj.translate}</>)
        } else
          return lyricObj.origin
      } else {
        //没词，向上找
        return lyricHandle(currentLyricIndex - 1);
      }
    }
    return false;
  }
  const handleCloseSongListPanel = useCallback(() => {
    setIsShowSongListPanel(false);
  }, [setIsShowSongListPanel])
  return (
    <div className="play-bar">
      <PlayBarWrapper
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isShowPlayBar={isShowPlayBar}
        isPlayBarLocked={isPlayBarLocked}
        isShowSongListPanel={isShowSongListPanel}
        className="sprite_playbar">
        <div
          className="hand"
          title="展开播放条">
          <div
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="lock-bar sprite_playbar">
          <span
            onClick={handleLockClick}
            className="lock sprite_playbar"/>
          </div>
        </div>
        <div className="content wrap-v2">
          <Control isPlaying={playbackState}>
            <button
              className="sprite_playbar btn prev"
              onClick={e => changeMusic(-1)}/>
            <button
              onClick={handlePlaybackAndStop}
              className="sprite_playbar btn play"/>
            <button
              className="sprite_playbar btn next"
              onClick={e => changeMusic(1)}/>
          </Control>
          <PlayInfo>
            <div className="image">
              <NavLink
                className="msk sprite_playbar"
                to={{pathname: "/discover/song-detail/" + currentSong?.id}}
              />
              <img
                src={
                  picUrl.length
                    ? picUrl + "?param=35y35"
                    : "http://s4.music.126.net/style/web2/img/default/default_album.jpg"
                } alt=""/>
            </div>
            <div className="info">
              <div className="song">
                <span className="song-name">{currentSong?.name}</span>
                <span className="singer-name">{
                  // currentSong.ar &&
                  currentSong?.ar?.map((item, index) => {
                    if (index === 0) return item.name
                    else return "/" + item.name;
                  })
                }</span>
              </div>
              {/* progress start */}
              <div className="progress">
                <Slider
                  onChange={handleChange}
                  onAfterChange={handleAfterChange}
                  tipFormatter={value => formatMinuteSecond(value * 1000)}
                  value={progress}
                  max={Math.round(currentSong?.dt / 1000)}/>
                <audio
                  // src={getSongUrl(currentSong.id)}
                  ref={audioRef}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={handleEnded}
                />
                <div className="time">
                  <span className="now-time">{formatMinuteSecond(currentTime * 1000)}</span>
                  /
                  <span className="total-time">{formatMinuteSecond(currentSong?.dt || 0)}</span>
                </div>
              </div>
              {/*  progress end */}
              <span className="lyric-tip"
                    style={{display: lyricList?.length && !!lyricHandle(currentLyricIndex) && !isShowSongListPanel ? "inline-block" : "none"}}
              >
                {lyricHandle(currentLyricIndex)}
              </span>
            
            </div>
          </PlayInfo>
          <Operator sequence={sequence} isVolShow={isVolShow} volume={volume}>
            <div className="left">
              <button className="sprite_playbar btn favor"/>
              <button className="sprite_playbar btn share"/>
            </div>
            <div className="right sprite_playbar">
              <div style={{
                display: isVolShow ? "inline-block" : "none"
              }} className="volume-bar sprite_playbar">
                <Slider
                  tipFormatter={val => Math.round(val / 100)}
                  onChange={handleVolumeChange}
                  value={volume} max={10000}
                  vertical
                  defaultValue={5000}
                />
              </div>
              <a title="音量" className="sprite_playbar btn volume" onClick={e => setIsVolShow(!isVolShow)}/>
              <a title={getTitle()} className="sprite_playbar btn loop" onClick={handleChangeSequence}/>
              
              <a
                title="播放列表"
                className="sprite_playbar btn playlist"
                onClick={e => setIsShowSongListPanel(!isShowSongListPanel)}
              >{playList.length}</a>
            </div>
          </Operator>
        </div>
      </PlayBarWrapper>
      <SongListPanel
        isShowSongListPanel={isShowSongListPanel}
        closeSongListPanel={handleCloseSongListPanel}/>
    </div>
  )
})
