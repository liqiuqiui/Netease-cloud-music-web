import React, { memo } from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getFormatImage } from '@/utils/format-utils';
// import {
//   addSongToPlayListAction,
//   addToPlayListAndPlayBackAction,
//   changePlaybackStateAction
// } from "@/pages/player/store";

import { TopRankingWrapper } from './style';
import { usePlayMusic,useAddToPlayList } from "../../hooks";
// import useAddToPlayList from "../../hooks/useAddToPlayList";

export default memo(function HYTopRanking(props) {
  const {info} = props;
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
          <a href="/todo" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
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
                  <Link to={"/discover/song-detail/"+item.id} className="name text-nowrap">{item.name}</Link>
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
        <a href="/#">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})
