import { useDispatch } from "react-redux";
import { changePlayListAction } from "../pages/player/store/actionCreators";

function useChangeWholePlaylist(playList) {
  const dispatch = useDispatch();
  dispatch(changePlayListAction(playList));
}

export default useChangeWholePlaylist;
