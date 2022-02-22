import React, { memo, useEffect, useState } from "react";

import { getSongDetails, getSongLyric } from "../../../../services/player"

//components
import { SongDetailRight, SongDetailLeft, SongDetailWrapper } from "./style.js";
import SongInfo from "./c-cpns/song-info";
// import SongComment from "./c-cpns/song-comment";
import { Link, useParams } from "react-router-dom";
import { parseLyric } from "../../../../utils/parse-lyric";
import { getSimilarPlaylist, getSongComments } from "../../../../services/song-detail";
import Comment from "../../../../components/comment";
import SimilarSong from "./c-cpns/similar-song";
import AppDownload from "./c-cpns/app-download";
import SubListSmall from "../../../../components/sub-list-small";

const Player = memo(function Player(props) {
  const params = useParams();
  const [songDetail, setSongDetail] = useState({});
  const [songLyric, setSongLyric] = useState({});
  const [songComments, setSongComments] = useState({});
  const [pageNum, setPageNum] = useState(1);
  const [simiPlaylist, setSimiPlaylist] = useState([]);
  useEffect(() => {
    //获取歌曲信息
    getSongDetails(params.id).then(res => setSongDetail(res.songs[0]))
    //获取歌曲歌词
    getSongLyric(params.id).then(res => {
      setSongLyric({
        lyricList: parseLyric(res),
        transUser: res?.transUser
      });
    });
    //获取包含这首歌的歌单
    getSimilarPlaylist(params.id).then(res => {
      setSimiPlaylist(res.playlists);
      console.log(res.playlists)
    })
  }, [params]);
  useEffect(() => {
    //获取歌曲评论
    getSongComments({id: params.id, offset: (pageNum - 1) * 20})
    .then(res => setSongComments(res))
  }, [params, pageNum])
  const onPageChange = (newPage) => {
    setPageNum(newPage);
  }
  return (
    <SongDetailWrapper className="wrap-v2">
      <SongDetailLeft>
        <SongInfo songLyric={songLyric}
                  songDetail={songDetail}/>
        {/*<SongComment songComments={songComments}/>*/}
        <Comment commentInfo={songComments} currentPage={pageNum} onPageChange={onPageChange}/>
      </SongDetailLeft>
      <SongDetailRight>
        <SubListSmall
          title={"包含这首歌的歌单"}
          listData={simiPlaylist}
          bottomEle={data => (
            <div>
              <span
                style={{
                  marginRight: "5px",
                  color: "#999"
                }}>by</span>
              <Link to={"/home/"+data?.creator?.userId}>{data?.creator?.nickname}</Link>
            </div>)}
          fieldMap={{
            imgUrl: "coverImgUrl",
            content: "name",
          }}
          to={data => "/playlist/"+data.id}
        />
        <SimilarSong/>
        <AppDownload/>
        <a href={`https://music.163.com/#/wiki/song?songId=${songDetail.id}&type=1`}>补充或修改歌曲资料></a><br/>
        <a href="https://music.163.com/#/wiki/task-center/m/st/wiki/task-center/recommend">用户wiki任务中心></a>
      </SongDetailRight>
    </SongDetailWrapper>
  )
});

export default Player;
