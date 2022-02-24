import React, { memo } from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { string, object } from "prop-types"
import { getFormatImage } from '@/utils/format-utils';
// import {
//   addSongToPlayListAction,
//   addToPlayListAndPlayBackAction,
//   changePlaybackStateAction
// } from "@/pages/player/store";

import { TopRankingWrapper } from './style';
import { usePlayMusic, useAddToPlayList } from "../../hooks";
// import useAddToPlayList from "../../hooks/useAddToPlayList";

const TopRanking = memo(function TopRanking(props) {
  const {info, to} = props;
  const {tracks = []} = info;
  
  // const dispatch = useDispatch();
  const playMusic = usePlayMusic();
  const addToPlayList = useAddToPlayList()
  //播放歌曲
  // const handlePlayClick = (item) => {
  //   // console.log(item.id)
  //   dispatch(addToPlayListAndPlayBackAction(item.id));
  //   dispatch(changePlaybackStateAction(true));
  // }
  // const handleAddToPlayListClick = (item) => {
  //   dispatch(addSongToPlayListAction(item.id));
  // }
  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getFormatImage(info.coverImgUrl)} alt=""/>
          <Link to={to} className="image_cover">ranking</Link>
        </div>
        <div className="info">
          <Link to={to}>{info.name}</Link>
          <div>
            <button className="btn play sprite_02"/>
            <button className="btn favor sprite_02"/>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <Link to={"/discover/song-detail/" + item.id} className="name text-nowrap">{item.name}</Link>
                  <div className="operate">
                    <button className="btn sprite_02 play" onClick={e => playMusic(item?.id)}/>
                    <button className="btn sprite_icon2 addto" onClick={e => addToPlayList(item.id)}/>
                    <button className="btn sprite_02 favor"/>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <Link to={to}>查看全部 &gt;</Link>
      </div>
    </TopRankingWrapper>
  )
})
TopRanking.propTypes = {
  to: string,
  info: object.isRequired
}
TopRanking.defaultProps = {
  to: "#"
}
export default TopRanking;
