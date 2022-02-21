import { Map } from "immutable";
import * as actionType from "./constants";
// import { CHANGE_LYRIC_LIST } from "./constants";

const initialState = Map({
  currentSong: {},
  playbackState: false,
  playList: [],
  currentSongIndex: 0,
  sequence: 0, // 0循环播放，1随机播放，2单曲循环
  lyricList: [],
  currentLyricIndex: 0,
});


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionType.CHANGE_PLAYBACK_STATE:
      return state.set("playbackState", action.state);
    case actionType.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex);
    case actionType.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionType.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence);
    case actionType.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList);
    case actionType.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.index);
    default:
      return state;
  }
}
export default reducer;
