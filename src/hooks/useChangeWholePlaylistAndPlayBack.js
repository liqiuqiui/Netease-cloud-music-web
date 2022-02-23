import { useDispatch } from "react-redux";
import {
  changeCurrentSongAction,
  changeCurrentSongIndexAction,
  changePlaybackStateAction,
  changePlayListAction,
  getSongLyricAction
} from "../pages/player/store/actionCreators";
import { message } from "antd";

function useChangeWholePlaylistAndPlayBack() {
  const dispatch = useDispatch();
  return (playList) => {
    //替换播放列表
    dispatch(changePlayListAction(playList));
    //获取第一首歌歌词
    dispatch(getSongLyricAction(playList[0].id));
    //更改当前歌曲为当前列表第一首
    dispatch(changeCurrentSongAction(playList[0]));
    //更改currentSongIndex
    dispatch(changeCurrentSongIndexAction(0));
    //设置播放状态
    dispatch(changePlaybackStateAction(true));
    message.info("已开始播放");
  }
}

export default useChangeWholePlaylistAndPlayBack;
