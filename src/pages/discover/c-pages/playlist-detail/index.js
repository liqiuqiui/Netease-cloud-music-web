//lib
import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper, Right, Left } from "./style.js"
import Operates from "../../../../components/operates";
import { Link, useParams } from "react-router-dom";
import { getPlaylistDetail, getPlaylistCommentList } from "../../../../services/playlist-detail";
import { formatDate, formatMinuteSecond } from "../../../../utils/format-utils";
import Table from "../../../../components/table";
import { useAddToPlayList, usePlayMusic } from "../../../../hooks";
import Singer from "../../../../components/singer";
import Comment from "../../../../components/comment";
import SubListSmall from "../../../../components/sub-list-small";
import { getCatePlaylist } from "../../../../services/playlist";
import ThemeHeaderSmall from "../../../../components/theme-header-small";
import AppDownload from "../../../../components/app-download";
import { shallowEqual, useSelector } from "react-redux";

const PlaylistDetail = memo(function PlaylistDetail(props) {
  const params = useParams();
  const [hotList, setHotList] = useState([]);
  const [playlistDetail, setPlaylistDetail] = useState({});
  useEffect(() => {
    getPlaylistDetail(params.id).then(res => {
      setPlaylistDetail(res.playlist);
      // console.log(res);
    });
    getCatePlaylist(null, null, 6).then(res => {
      console.log(res.playlists)
      const list = res.playlists.filter(item => +item.id !== +params.id).slice(0, 5);
      setHotList(list);
    })
  }, [params.id]);
  useEffect(() => {
    console.log(playlistDetail);
  }, [playlistDetail]);
  const addToPlayList = useAddToPlayList();
  
  const currentSong = useSelector(state => state.getIn(["playList", "currentSong"]), shallowEqual);
  const playMusic = usePlayMusic();
  const columns = [
    {
      index: true,
      title: "",
      style: {
        width: "74px",
        paddingLeft: "20px"
      },
      render(data, index) {
        return (
          <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
            <span style={{marginLeft: "5px", color: "#999"}}>{index + 1}</span>
            {/* 播放图标 */}
            <i onClick={e => playMusic(data.id)}
               className={"play sprite_table" + (currentSong?.id === data.id ? " current-play" : "")}/>
          </div>
        )
      }
    },
    {
      title: "歌曲标题",
      style: {width: "260px"},
      render(data, index) {
        return (
          <>
            {/* 歌曲名称 */}
            <span className="text-nowrap" style={{width: "210px"}}>
              <Link
                title={!!data.alia.length ? `${data.name} - (${data.alia[0]})` : data.name}
                to={"/discover/song-detail/" + data.id}
              >{data.name}</Link>
              {!!data.alia.length && <span title={data.alia[0]} style={{color: "#aeaeae"}}> - ({data.alia})</span>}
            </span>
            {/* mv标志 */}
            {data?.mv > 0 && <Link to={"/mv?id=" + data.mv} className="sprite_table mv"/>}
          </>
        )
      }
    }, {
      title: "时长",
      style: {width: "111px"},
      render(data) {
        return (
          <>
            <span className="time">{data.dt && formatMinuteSecond(data.dt)}</span>
            <span className="operates">
              <i title={"添加到播放列表"}
                 className="add-to sprite_icon2"
                 onClick={e => addToPlayList(data.id)}/>
              <i title={"收藏"} className="favor sprite_table"/>
              <i title={"分享"} className="share sprite_table"/>
              <i title={"下载"} className="download sprite_table"/>
            </span>
          </>
        )
      }
    },
    {
      title: "歌手",
      style: {width: "88px"},
      render(data) {
        return <div className="text-nowrap"><Singer singerList={data?.ar} splitSpace={false}/></div>
      }
    },
    {
      title: "专辑",
      style: {width: "127px"},
      render(data) {
        return (
          <Link className="text-nowrap" to={"#"}>{data?.al?.name}</Link>
        )
      }
    }
  ];
  
  
  const [page, setPage] = useState(1);
  const [commentList, setCommentList] = useState({});
  useEffect(() => {
    getPlaylistCommentList(params.id).then(setCommentList)
  }, [page, params.id]);
  const onPageChange = (page) => {
    setPage(page);
  }
  return (
    <Wrapper className="wrap-v2 playlist-detail">
      <Left className="detail-left">
        <div className="left-head">
          <div className="image">
            <img src={playlistDetail.coverImgUrl + "?param=200y200"} alt=""/>
            <span className="mask sprite_cover"/>
          </div>
          <div className="info">
            <div className="playlist-name">
              <i className="ico sprite_icon2">
                <span className="R white-r"/>
              </i>
              <h2 className="name">{playlistDetail.name}</h2>
            </div>
            <div className="user">
              <img className="user-avatar"
                   src={playlistDetail?.creator?.avatarUrl + "?param=35y35"} alt=""/>
              <div className="user-name">{playlistDetail?.creator?.nickname}</div>
              {
                playlistDetail?.creator?.avatarDetail && <img
                  src={playlistDetail?.creator?.avatarDetail?.identityIconUrl}
                  alt="" className="detail-img"/>
              }
              <span className="create-time">
              {playlistDetail?.createTime && formatDate(playlistDetail.createTime, "yyyy-MM-dd")} 创建
            </span>
            </div>
            <Operates favorText={`(${playlistDetail.subscribedCount || 0})`}
                      shareText={`(${playlistDetail.shareCount || 0})`}
                      commentText={`(${playlistDetail.commentCount || 0})`}/>
            <div className="tags">
              <b>标签：</b>
              {
                playlistDetail?.tags?.map(item => {
                  return (
                    <Link key={item} className="sprite_button" to={"/discover/playlist?cate=" + item}>
                      <i className="sprite_button">{item}</i>
                    </Link>
                  )
                })
              }
            </div>
            <p className="desc">
              <b>介绍：</b>{playlistDetail.description}
            </p>
          </div>
        </div>
        <div className="song-list">
          <div className="list-title">
            <div className="title-left">
              <h3>歌曲列表</h3>
              <span>{playlistDetail.trackCount}首歌</span>
            </div>
            <div className="title-right">播放：<strong>{playlistDetail.playCount}</strong>次</div>
          </div>
          <Table columns={columns} data={playlistDetail.tracks || []}/>
          <div className="list-more">
            <div className="text">查看更多内容，请下载客户端</div>
            <a className="button" href="https://music.163.com/#/download" target="_blank"
               rel="noopener noreferrer">立即下载</a>
          </div>
        </div>
        <div className="comment">
          <Comment onPageChange={onPageChange} commentInfo={commentList || {}} currentPage={page}/>
        </div>
      </Left>
      <Right>
        <div className="playlist-fans">
          <ThemeHeaderSmall title="喜欢这个歌单的人"/>
          <ul className="fans-list">
            {
              playlistDetail?.subscribers?.map(item => {
                return (
                  <li key={item.userId}>
                    <Link title={item.nickname} to={"/user/home?id=" + item.userId}>
                      <img src={item.avatarUrl + "?param=40y40"} alt=""/>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <SubListSmall title="热门歌单"
                      bottomEle={(data) => {
                        return (
                          <div className="text-nowrap">
                            <span style={{color: "#999", marginRight: "5px"}}>by</span>
                            <Link to={"/user/home?id=" + data.creator.userId}>{data.creator.nickname}</Link>
                            {data.creator.avatarDetail &&
                            <img style={{width: "13px"}} src={data.creator.avatarDetail.identityIconUrl} alt=""/>}
                          </div>
                        )
                      }}
                      listData={hotList}
                      fieldMap={{content: "name", imgUrl: "coverImgUrl"}}
                      to={({id}) => "/discover/playlist/" + id}
        />
        <AppDownload/>
      </Right>
    </Wrapper>
  )
});

PlaylistDetail.propTypes = {};
PlaylistDetail.defaultProps = {};

export default PlaylistDetail;
