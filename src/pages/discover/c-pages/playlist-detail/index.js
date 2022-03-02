//lib
import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper, Right, Left } from "./style.js"
import Operates from "../../../../components/operates";
import { Link, useParams } from "react-router-dom";
import { getPlaylistDetail } from "../../../../services/playlist-detail";
import { formatDate } from "../../../../utils/format-utils";

const PlaylistDetail = memo(function PlaylistDetail(props) {
  const params = useParams();
  
  const [playlistDetail, setPlaylistDetail] = useState({});
  useEffect(() => {
    getPlaylistDetail(params.id).then(res => {
      setPlaylistDetail(res.playlist);
      // console.log(res);
    })
  }, []);
  useEffect(() => {
    console.log(playlistDetail);
  }, [playlistDetail]);
  
  return (
    <Wrapper className="wrap-v2 playlist-detail">
      <Left className="detail-left">
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
            {/*<Link className="sprite_button" to={"#"}><i className="sprite_button">治愈</i></Link>*/}
            {/*<Link className="sprite_button" to={"#"}><i className="sprite_button">感动</i></Link>*/}
          </div>
          <p className="desc">
            <b>介绍：</b>{playlistDetail.description}
          </p>
        </div>
      </Left>
      <Right>右边</Right>
    </Wrapper>
  )
});

PlaylistDetail.propTypes = {};
PlaylistDetail.defaultProps = {};

export default PlaylistDetail;
