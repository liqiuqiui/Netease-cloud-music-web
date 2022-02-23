//lib
import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"
//services
import { getCategories } from "../../../../services/playlist";
//utils
import parseCategoryData from "../../../../utils/parse-category-data";
import { Link, useLocation } from "react-router-dom";
import queryStringParser from "../../../../utils/queryStringParser";

const Playlist = memo(function Playlist(props) {
  const [categoryList, setCategoryList] = useState([]);
  const {search} = useLocation();
  const query = queryStringParser(search);
  const [isHot, setIsHot] = useState(!!query.order);
  
  useEffect(() => {
    getCategories().then(res => {
      setCategoryList(parseCategoryData(res));
    });
  }, []);
  const handleChangeCate = (cate) => {
    console.log(cate)
  }
  // useEffect(() => {
  //   console.log(categoryList)
  // }, [categoryList])
  return (
    <Wrapper className="wrap-v2">
      <div className="playlist-title">
        <h3 className="title-left">
          <span>全部</span>
          <span className="sprite_button">
            <i className="sprite_button">
              选择分类
              <em className="sprite_icon2"/>
            </i>
          </span>
        </h3>
        <div className="title-right sprite_button2">
          <Link onClick={e => setIsHot(true)}
                to={"/discover/playlist?order=hot" + (query?.cate ? ("&cate=" + query.cate) : "")}>热门</Link>
        </div>
      </div>
      <div className="cate-pop">
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
                            onClick={e =>handleChangeCate(cate)}
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
    
    </Wrapper>
  )
});

Playlist.propTypes = {};
Playlist.defaultProps = {};

export default Playlist;
