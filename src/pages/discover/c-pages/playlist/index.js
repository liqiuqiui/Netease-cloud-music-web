//lib
import React, { memo, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"
//services
import { getCategories, getCatePlaylist } from "../../../../services/playlist";
//utils
import parseCategoryData from "../../../../utils/parse-category-data";
import { Link, useLocation } from "react-router-dom";
import queryStringParser from "../../../../utils/queryStringParser";
import LMusicCover from "../../../../components/music-cover";
import LPagination from "../../../../components/pagination";

const Playlist = memo(function Playlist(props) {
  const [categoryList, setCategoryList] = useState([]);
  const {search} = useLocation();
  const query = queryStringParser(search);
  const [isHot, setIsHot] = useState(!!query.order);
  const [showCate, setShowCate] = useState(false);
  const [cate, setCate] = useState("全部");
  const [playList, setPlaylist] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  
  //获取分类列表
  useEffect(() => {
    getCategories().then(res => {
      setCategoryList(parseCategoryData(res));
    });
  }, []);
  // useEffect(() => {
  //   setCate(query.cate)
  // }, [query])
  //切换分类
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowCate(false)
    // console.log(decodeURI(query.cate))
    getCatePlaylist(decodeURI(query.cate || "全部"), "hot", 35, (page - 1) * 35).then(res => {
      setCate(res.cat);
      setPlaylist(res.playlists);
      setTotal(res.total);
      console.log(res);
    })
  }, [page, search]);
  
  const pageChange = useCallback((page) => {
    // console.log(page);
    setPage(page);
  }, [setPage]);
  
  return (
    <Wrapper className="wrap-v2">
      {/* 歌单首部 */}
      <div className="playlist-title">
        <h3 className="title-left">
          <span>{cate}</span>
          <span onClick={() => setShowCate(v => !v)} className="sprite_button">
            <i className="sprite_button">
              选择分类
              <em className="sprite_icon2"/>
            </i>
          </span>
        </h3>
        <div className="title-right sprite_button2">
          <Link onClick={() => setIsHot(true)}
                to={"/discover/playlist?order=hot" + (query?.cate ? ("&cate=" + query.cate) : "")}>热门</Link>
        </div>
      </div>
      {/* 分类选择弹出框 */}
      <div className="cate-pop" style={{display: showCate ? "block" : "none"}}>
        <div className="cate-arrow sprite_icon"/>
        <div className="all-cate">
          <Link className="sprite_button2"
                to={"/discover/playlist" + (isHot ? "?order=hot" : "")}>全部风格</Link>
        </div>
        <ul className="cate-list">
          {
            categoryList.map((item) => {
              return (
                <li className="row" key={item.name}>
                  <div className="cate-name">
                    <i className="sprite_icon2"/>
                    <span>{item.name}</span>
                  </div>
                  <div className="cates">
                    {item.subs.map((cate) => {
                      return (
                        <span key={cate.name}>
                          <Link
                            to={"/discover/playlist?cate=" + cate.name + (isHot ? "&order=hot" : "")}>{cate.name}</Link>
                          <span className="line">|</span>
                        </span>)
                    })}
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      {/* 歌单展示 */}
      <div className="playlist-body">{
        playList.map((item) => {
          // console.log(item)
          return <LMusicCover
            style={{marginTop: "30px"}}
            multiline={true}
            key={item.id + Math.random() * 10} info={{
            id: item.id,
            imgUrl: item.coverImgUrl,
            playCount: item.playCount,
            desc: item.name,
            copywriter: {
              id: item.creator.userId,
              name: item.creator.nickname,
              avatarDetailImg: item.creator?.avatarDetail?.identityIconUrl
            }
          }}/>
        })
      }</div>
      <LPagination style={{
        marginTop: "20px"
      }} pageSize={35} currentPage={page} onChange={pageChange} total={total}/>
    </Wrapper>
  )
});

Playlist.propTypes = {};
Playlist.defaultProps = {};

export default Playlist;
