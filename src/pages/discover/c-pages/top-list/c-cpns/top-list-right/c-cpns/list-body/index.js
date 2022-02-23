//lib
// import { useLocation } from "react-router-dom";
import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { shallowEqual, useSelector } from "react-redux";

//components
import { Wrapper } from "./style.js"
import Table from "../../../../../../../../components/table";
import { formatMinuteSecond } from "../../../../../../../../utils/format-utils";
import { Link } from "react-router-dom";
import Singer from "../../../../../../../../components/singer";
import { useAddToPlayList, usePlayMusic } from "../../../../../../../../hooks";


const ListBody = memo(function ListBody(props) {
  const playMusic = usePlayMusic();
  const addToPlayList = useAddToPlayList();
  const {dataList, currentSong} = useSelector(state => ({
    dataList: state.getIn(["toplist", "topListDataList"]),
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual);
  
  const columns = [
    {
      title: "",
      style: {
        width: "25px",
        paddingLeft: "20px"
      },
      index: true,
      render(data, index) {
        return (
          <>
            <span style={{
              width: "25px",
              textAlign: "center",
              color: "#999"
            }}>
            {index + 1}
            </span>
            {/*<i className="sprite_icon2" style={{*/}
            {/*  width: "16px",*/}
            {/*  height: "17px",*/}
            {/*  backgroundPosition: " -67px -283px",*/}
            {/*}}/>*/}
          </>
        )
      }
    }, {
      title: "标题",
      render(data, index) {
        return (
          <>
            {/* 前三个显示图片 */}
            {index < 3 && <img src={data.al.picUrl + "?param=50y50"} alt=""/>}
            {/* 播放图标 */}
            <i onClick={e => playMusic(data.id)}
               className={"play sprite_table" + (currentSong.id === data.id ? " current-play" : "")}/>
            {/* 歌曲名称 */}
            <span className="text-nowrap" style={{maxWidth: index < 3 ? "61%" : "80%"}}>
              <Link
                title={!!data.alia.length ? `${data.name} - (${data.alia[0]})` : data.name}
                to={"/discover/song-detail/" + data.id}
              >{data.name}</Link>
              {!!data.alia.length && <span title={data.alia[0]} style={{color: "#aeaeae"}}> - ({data.alia})</span>}
            </span>
            {/* mv标志 */}
            {data?.mv > 0 && <Link to={"/mv?id="+data.mv} className="sprite_table mv" style={{
            
            }}/>}
          </>
        );
      }
    }, {
      title: "时长",
      style: {width: "91px"},
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
    }, {
      title: "歌手",
      style: {width: "26%"},
      render(data) {
        return <div className="text-nowrap"><Singer singerList={data?.ar} splitSpace={false}/></div>
      }
    }
  ]
  return (
    <Wrapper>
      <div className="list-title">
        <div className="title-left">
          <h3>歌曲列表</h3>
          <span>{dataList.trackCount}首歌</span>
        </div>
        <div className="title-right">播放：<strong>{dataList.playCount}</strong>次</div>
      </div>
      <div className="list-content">
        <Table columns={columns} data={dataList.tracks || []}/>
      </div>
    </Wrapper>
  )
});

ListBody.propTypes = {};
ListBody.defaultProp = {};

export default ListBody;
