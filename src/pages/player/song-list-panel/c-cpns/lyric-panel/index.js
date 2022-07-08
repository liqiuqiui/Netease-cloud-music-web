import React, { memo, useEffect, useRef } from "react";

import { LyricPanelWrapper } from "./style.js";
import { shallowEqual, useSelector } from "react-redux";
import { scrollTo } from "@/utils/scrollTo";

const LyricPanel = memo(function LyricPanel(props) {
  
  const {lyricList, currentLyricIndex} = useSelector(state => ({
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
  }), shallowEqual);
  const lyricPanelRef = useRef();
  useEffect(() => {
    // console.log("滚动歌词")
    // if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    // //根据是否有译文来判断滚动距离
    // const multiple = lyricList[currentLyricIndex]?.content?.translate ? 2 : 1
    // console.log("滚动倍数", multiple)
    // scrollTo(lyricPanelRef.current, (currentLyricIndex - 3) * 32 * multiple, 300)
  });
  const liRef = useRef();
  useEffect(() => {
    // 获取当前歌词li距离父元素顶部的距离
    const liOffsetTop = liRef.current?.offsetTop || 0;
    // 获取li的高度
    const liOffsetHeight = liRef.current?.offsetHeight || 0;
    // 计算scrollTop值，用当前歌词li距父元素顶部的距离减去歌词面板高度与歌词li高度差值的一半
    const toDistance = Math.round(liOffsetTop-(260-liOffsetHeight)/2);
    // lyricPanelRef.current.scrollTop = toDistance;
    // 调用滚动函数，300ms内滚动完成
    scrollTo(lyricPanelRef.current, toDistance, 300)
    // console.log(toDistance);
      // document.quer
    //   console.log("lyric panel render")
    // console.log("当前li：", liRef.current)
    // console.log("当前歌词：", liRef.current?.innerHTML)
    // console.log("offsetTop", liRef.current?.offsetTop)
    // console.log("当前li高度", liRef.current?.offsetHeight);
    // console.log(lyricList)
  })
  return (
    <LyricPanelWrapper ref={lyricPanelRef}>
      {/*<div className="msk"/>*/}
      <ul>{
        lyricList.map((lyric, index) => {
          const isTranslate = !!lyric.content.translate;
          return (
            <li ref={currentLyricIndex === index ? liRef : null} className={currentLyricIndex === index ? "active" : ""}
                style={{
                  height: lyric.content.origin ? "auto" : "32px"
                }}
                key={lyric.time + lyric.content.origin}>
              {isTranslate ? "原：" + lyric.content.origin : lyric.content.origin}
              {isTranslate ? <br/> : ""}
              {isTranslate ? "译：" + lyric.content.translate : ""}
            </li>
          )
        })
      }</ul>
    </LyricPanelWrapper>
  )
});

export default LyricPanel;
