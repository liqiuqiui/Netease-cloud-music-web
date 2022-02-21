//lib
import React, { memo } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"
import Table from "../../../../../../../../components/table";

const ListBody = memo(function ListBody(props) {
  const columns = [
    {
      title: "",
      style: {
        width: "77px",
        paddingLeft: "20px"
      },
      index: true,
      render(data, index) {
        return (
          <div style={{
            display: "flex",
            // alignItems: "center"
          }}>
            <span style={{
              width: "25px",
              textAlign: "center",
              color: "#999"
            }}>
            {index + 1}
            </span>
            <i className="sprite_icon2" style={{
              width: "16px",
              height: "17px",
              backgroundPosition: " -67px -283px",
              // backgroundColor: "red"
            }}/>
          </div>
        )
      }
    }, {
      title: "标题",
      dataIndex: "name",
      render(data) {
        console.log(data)
        return (
          <>
            <img src="https://p4.music.126.net/FSA_gmRqNfNkYbEZ9-De-Q==/109951166897662938.jpg?param=50y50" alt=""/>
            <i style={{marginLeft: "10px"}} className="play sprite_table"/>
            <span style={{
              marginLeft: "10px"
            }}>{data.name}</span>
          </>
        
        );
      }
    }, {
      title: "时长",
      dataIndex: "time"
    }, {
      title: "歌手",
      dataIndex: "singer"
    }
  ]
  const data = [
    {
      name: "清空",
      time: 123456,
      singer: "王新晨"
    },
    {
      name: "巨长名字测试巨长歌手测试巨长歌手测试巨长歌手测试",
      time: 123456,
      singer: "巨长歌手测试巨长歌手测试巨长歌手测试巨长歌手测试"
    }
  ];
  return (
    <Wrapper>
      <div className="list-title">
        <div className="title-left">
          <h3>歌曲列表</h3>
          <span>100首哥</span>
        </div>
        <div className="title-right">播放：<strong>1111</strong>次</div>
      </div>
      <div className="list-content">
        <Table columns={columns} data={data}/>
      </div>
    </Wrapper>
  )
});

ListBody.propTypes = {};
ListBody.defaultProp = {};

export default ListBody;
