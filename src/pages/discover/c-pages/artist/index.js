//lib
import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"


import { artistCategories } from "../../../../common/local-data";
import { Link, useLocation } from "react-router-dom";
import ThemeHeaderDj from "../../../../components/theme-header-dj";
import { getArtistList } from "../../../../services/artist";
import queryStringParser from "../../../../utils/queryStringParser";

const Artist = memo(function Artist(props) {
  const {search} = useLocation();
  const query = queryStringParser(search);
  // const [title, setTitle] = useState("推荐歌手");
  const [artistList, setArtistList] = useState([]);
  const [params, setParams] = useState({
    area: "-1",
    type: "-1",
    initial: "-1",
    limit: 100,
    cate:"推荐歌手",
    ...query
  });
  
  const initialList = [
    "热门", "A", "B", "C", "D",
    "E", "F", "G", "H", "I",
    "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X",
    "Y", "Z", "其他"].map(item => {
    let value = "";
    if (item === "热门") value = "-1";
    else if (item === "其他") value = "0";
    else value = item.toLowerCase();
    return {
      name: item,
      value
    }
  });
  
  useEffect(() => {
    setParams(v => ({...v, ...query}));
  }, [search]);
  
  useEffect(() => {
    let paramsInitial = "";
    if (params.initial === "其他") paramsInitial = "0";
    else if (params.initial === "热门") paramsInitial = "-1";
    else paramsInitial = params.initial.toLowerCase();
    
    console.log(params)
    getArtistList({...params, initial: paramsInitial})
    .then(res => setArtistList(res.artists));
  }, [params.initial, params.type, params.area]);
  
  const changeCate = (area, type, title) => {
    // setTitle(title);
    setParams(v => ({...v, area, type}));
  }
  
  
  return (
    <Wrapper className="wrap-v2 artist">
      <div className="left">
        <ul className="cates">
          {
            artistCategories.map((cate) => {
              return (
                <li className="cate" key={cate.title}>
                  <h2 className="cate-title">{cate.title}</h2>
                  <ul>
                    {cate.artists.map((item) => {
                      return (
                        <li onClick={e => changeCate(cate.area, item.type, item.name)} key={item.name}
                            className="cate-item">
                          <Link
                            className={(+query.type === item.type && +query.area === cate.area) ? "active" : ""}
                            to={`/discover/artist?type=${item.type}&area=${cate.area}&initial=-1&cate=${item.name}`}>{item.name}</Link>
                        </li>
                      )
                      
                    })}
                  </ul>
                </li>
              )
            })
          }
        </ul>
      </div>
      
      <div className="right">
        <ThemeHeaderDj title={decodeURI(params.cate)} showDjText={false}/>
        <ul className="initial-list">{
          initialList.map(item => {
            return (
              <li
                // onClick={e => initialChange(item)}
                key={item.name}
                className={params.initial === item.value ? "active" : ""}>
                <Link
                  to={`/discover/artist?type=${params.type}&area=${query.area}&initial=${item.value}&cate=${params.cate}`}>{item.name}</Link>
              </li>
            )
          })
        }</ul>
        <ul className="list">
          {
            artistList?.map((item, index) => {
              return (
                <li key={item.id} style={{marginBottom: index < 10 ? "30px" : ""}}>
                  {index < 10 && <div className="cover">
                    <img src={item.picUrl + "?param=130y130"} alt=""/>
                    <Link to={"/artist?id=" + item.id} className="mask sprite_cover"/>
                  </div>}
                  <p className="desc" style={{justifyContent: index >= 10 ? "flex-start" : ""}}>
                    <Link className="name text-nowrap" to={"/artist?id=" + item.id}>{item.name}</Link>
                    {item.accountId &&
                    <Link to={"/user/home?id=" + item.accountId}><i className="avatar sprite_icon2"/></Link>}
                  </p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </Wrapper>
  )
});

Artist.propTypes = {};
Artist.defaultProps = {};

export default Artist;
