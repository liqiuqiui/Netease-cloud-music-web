import { useDispatch } from "react-redux";
import { changePlayListAction } from "../pages/player/store/actionCreators";
import { message } from "antd";

function useAddAllToPlaylist() {
  const dispatch = useDispatch();
  return (playlist) => {
    dispatch((dispatch, getState) => {
      const oldPlaylist = getState().getIn(["player", "playList"]);
      const newPlaylist = playlist.filter((item1) => -1 === oldPlaylist.findIndex((item2) => item1.id === item2.id))
      dispatch(changePlayListAction([...oldPlaylist, ...newPlaylist]));
    });
    message.info("已添加到播放列表");
  }
}

export default useAddAllToPlaylist;
