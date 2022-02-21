import { getSongDetails, getSongLyric } from "@/services/player";
import * as actionTypes from "./constants";
import { getRandomNum } from "@/utils/getRandomNum";
import { parseLyric } from "../../../utils/parse-lyric";
import useLocalStorage from "../../../utils/useLocalStorage";

import { message } from "antd"
//更改播放状态
export const changePlaybackStateAction = (state) => ({
  type: actionTypes.CHANGE_PLAYBACK_STATE,
  state
})
//更改当前播放歌曲
export const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})
//添加到播放列表并播放
export const addToPlayListAndPlayBackAction = (ids) => {
  return (dispatch, getState) => {
    const state = getState();
    //在播放列表中查找是否已存在，如果存在，直接设置它的index
    const playList = state.getIn(["player", "playList"]);
    const currentSong = state.getIn(["player", "currentSong"]);
    const songIndex = playList.findIndex(song => song.id === +ids);
    //歌曲正在播放
    if (currentSong.id === +ids) return message.info("歌曲正在播放")
    //存在
    if (songIndex !== -1) {
      //改变当前播放的歌曲的index
      dispatch(changeCurrentSongIndexAction(songIndex));
      //改变当前播放的歌曲
      dispatch(changeCurrentSongAction(playList[songIndex]));
    } else {
      //不存在
      getSongDetails(ids).then(res => {
        const song = res.songs && res.songs[0];
        const newPlayList = [...playList, song];
        //更新歌曲列表
        dispatch(changePlayListAction(newPlayList));
        //更新歌曲index为列表长度-1，新添加的歌曲放在列表末尾
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        //改变当前播放的歌曲
        dispatch(changeCurrentSongAction(song));
      })
    }
    message.info("已开始播放")
    //获取歌词
    dispatch(getSongLyricAction(ids));
  }
}
// 改变播放列表
export const changePlayListAction = (playList) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLocalStorage("playList", playList);
  return ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
  })
}
//更改当前播放歌曲的index
export const changeCurrentSongIndexAction = (currentSongIndex) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLocalStorage("currentSongIndex", currentSongIndex);
  return ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex
  })
}
//改变播放顺序
export const changePlaySequenceAction = sequence => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence: sequence >= 3 ? 0 : sequence
})

//根据tag，改变当前播放的歌曲
export const changePlaySongAction = (tag) => {
  return (dispatch, getState) => {
    const state = getState();
    
    const playList = state.getIn(["player", "playList"]);
    const playSequence = state.getIn(["player", "sequence"]);
    let currentSongIndex = state.getIn(["player", "currentSongIndex"]);
    if (playList.length <= 0) return;
    //播放的歌曲的index
    // let playIndex = currentSongIndex + tag;
    switch (playSequence) {
      case 1: //随机播放
        console.log("随机播放")
        let randomIndex = -1;
        do {
          randomIndex = getRandomNum(playList.length)
        } while (currentSongIndex === randomIndex);
        currentSongIndex = randomIndex;
        // currentSongIndex = getRandomNum(playList.length);
        break;
      default:
        //除了随机播放，其他都是根据tag值来播放
        console.log(`${tag < 0 ? '上' : '下'}一首`)
        currentSongIndex += tag;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
        if (currentSongIndex >= playList.length) currentSongIndex = 0;
    }
    console.log("播放index", currentSongIndex)
    dispatch(changeCurrentSongAction(playList[currentSongIndex]));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    //获取歌词
    dispatch(getSongLyricAction(playList[currentSongIndex].id));
    dispatch(changePlaybackStateAction(true));//设置播放状态
  }
}
//修改state中的lyricList
export const changeSongLyricAction = (lyricList) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLocalStorage("currentLyricList", lyricList)
  return ({
    type: actionTypes.CHANGE_LYRIC_LIST,
    lyricList
  })
}
//获取歌词的网络请求
export const getSongLyricAction = (id) => {
  return (dispatch, getState) => {
    // const state = getState();
    // const currentSong = state.getIn(["player", "currentSong"]);
    // console.log("获取歌词1", currentSong, id)
    // if (currentSong.id === +id) return;
    getSongLyric(id).then(res => {
      dispatch(changeSongLyricAction(parseLyric(res)))
    });
    //每次获取歌词的时候，都检查一下播放状态
    console.log("获取歌词")
    // console.log(!state.getIn(["song-detail", "playbackState"]))
    // if (!state.getIn(["song-detail", "playbackState"]))
    //   dispatch(changePlaybackStateAction(true))
  }
}
//更改当前歌词index
export const changeCurrentLyricIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index
})
//添加歌曲到列表（不播放）
export const addSongToPlayListAction = (id) => {
  return (dispatch, getState) => {
    const state = getState();
    const playList = state.getIn(["player", "playList"]);
    const index = playList.findIndex(i => i.id === +id);
    if (index !== -1) return message.info("歌曲在播放列表中已存在");
    
    getSongDetails(id).then(res => {
      const song = res.songs && res.songs[0];
      const newPlayList = [...playList, song];
      //更新歌曲列表
      dispatch(changePlayListAction(newPlayList));
    });
    message.info("已添加到播放列表")
  }
}
//播放列表中移除歌曲
export const removeSongFromPlayListAction = (id) => {
  return (dispatch, getState) => {
    const state = getState();
    const playList = state.getIn(["player", "playList"]);
    const currentSongIndex = state.getIn(["player", "currentSongIndex"]);
    let index = -1;
    // console.log("删除id为：", id)
    const newPlayList = playList.filter((i, idx) => {
      if (i.id !== id)
        return true;
      index = idx;
      return false;
    });
    let newSongIndex = 0;
    //删除的音乐正在播放
    console.log(index)
    if (currentSongIndex === index) {
      // console.log("删除的音乐正在播放")
      //是最后一首
      if (index === playList.length - 1) {
        newSongIndex = newPlayList.length - 1;
        // console.log(`它是最后一首，它的index是：${currentSongIndex},下一首index是${newSongIndex}`);
      } else {
        newSongIndex = currentSongIndex;
        // console.log(`它不是最后一首,它的index是：${currentSongIndex},下一首index是${newSongIndex}`);
      }
      dispatch(changeCurrentSongAction(newPlayList[newSongIndex]));
      dispatch(changeCurrentSongIndexAction(newSongIndex));
      dispatch(getSongLyricAction(newPlayList[newSongIndex]?.id));
    } else {
      // console.log("删除的音乐没在播放");
      if (index < currentSongIndex)
        dispatch(changeCurrentSongIndexAction(currentSongIndex - 1));
    }
    
    // console.log("删除前的playList", playList);
    // console.log("删除后的新playlist", newPlayList);
    dispatch(changePlayListAction(newPlayList));
  }
}
