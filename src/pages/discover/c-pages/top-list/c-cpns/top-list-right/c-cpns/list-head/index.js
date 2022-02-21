//lib
import React, { memo } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js";
import Operates from "../../../../../../../../components/operates";

const ListHead = memo(function ListHead(props) {
  return (
    <Wrapper className="list-head">
      <div className="head-left">
        <img src="https://p2.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=150y150" alt=""/>
        <div className="mask sprite_cover"/>
      </div>
      <div className="head-right">
        <h2 className="list-name">飙升榜</h2>
        <div className="update-time">
          <i className="sprite_icon2"/>
          <span>最近更新：2月19日</span>
          <span>（刚刚更新）</span>
        </div>
        <Operates/>
      
      </div>
    </Wrapper>
  )
});

ListHead.propTypes = {};
ListHead.defaultProp = {};

export default ListHead;
