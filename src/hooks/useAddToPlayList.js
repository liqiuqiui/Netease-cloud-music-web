import { useDispatch } from "react-redux";
import { addSongToPlayListAction } from "../pages/player/store";

function useAddToPlayList() {
  const dispatch = useDispatch();
  return (songId) => dispatch(addSongToPlayListAction(songId))
}

export default useAddToPlayList;
