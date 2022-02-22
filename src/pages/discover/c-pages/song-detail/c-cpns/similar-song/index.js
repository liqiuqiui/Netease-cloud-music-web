import React, { memo, useEffect, useState } from "react";

import { SimilarSongWrapper } from "./style.js";
import ThemeHeaderSmall from "../../../../../../components/theme-header-small";
import { Link, useParams } from "react-router-dom";
import { getSimilarSong } from "../../../../../../services/song-detail";
import { useAddToPlayList, usePlayMusic } from "../../../../../../hooks";
import Singer from "../../../../../../components/singer";

const SimilarSong = memo(function SimilarSong(props) {
  const params = useParams();
  const [similarSongs, setSimilarSongs] = useState([]);
  const playMusic = usePlayMusic();
  const addToPlayMusic = useAddToPlayList();
  useEffect(() => {
    getSimilarSong(params.id).then(res => {
      console.log(res)
      setSimilarSongs(res.songs)
    })
  }, [params]);
  return (
    <SimilarSongWrapper>
      <ThemeHeaderSmall title="相似歌曲"/>
      <ul style={{marginTop: "20px"}}>
        {
          similarSongs?.map(item => {
            return (
              <li
                className="simi-item"
                style={{marginTop: "10px"}}
                key={item.id}
              >
                <div className="simi-item-left">
                  <Link to={"/discover/song-detail/" + item.id} className="song-name text-nowrap">{item?.name}</Link>
                  <div className="song-auth text-nowrap">
                    <Singer singerList={item?.artists} splitSpace={false} />
                  </div>
                
                </div>
                <div className="simi-item-right">
                  <i className="play" onClick={e=>playMusic(item.id)}>▶</i>
                  <i className="add-to" onClick={e => addToPlayMusic(item.id)}>+</i>
                </div>
              </li>
            )
          })
        }
      
      </ul>
    </SimilarSongWrapper>
  )
});

export default SimilarSong;
