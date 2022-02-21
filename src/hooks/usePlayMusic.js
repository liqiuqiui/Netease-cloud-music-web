import { addToPlayListAndPlayBackAction, changePlaybackStateAction } from "../pages/player/store";
import { useDispatch } from "react-redux";


function usePlayMusic() {
  const dispatch = useDispatch();
  return (songId) => {
    dispatch(addToPlayListAndPlayBackAction(songId));
    dispatch(changePlaybackStateAction(true));
  }
}


export default usePlayMusic;
