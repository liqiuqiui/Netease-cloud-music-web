import React, { memo, useEffect } from "react";

import { SingerWrapper, SingerInfoItem } from "./style.js";
import ThemeHeaderSmall from "@/components/theme-header-small/index";
import { getSettledSingerListAction } from "../../store/actionCreators";
import { shallowEqual, useDispatch, useSelector } from "react-redux";


export default memo(function Singer(props) {
  // redux hooks
  const dispatch = useDispatch();
  const {settledSingerList} = useSelector(state => ({
    settledSingerList: state.getIn(["recommend", "settledSingerList"])
  }), shallowEqual);
  
  // useEffect(() => {
  //   console.log(settledSingerList)
  // }, [settledSingerList])
  
  useEffect(() => {
    dispatch(getSettledSingerListAction(5001, 5));
  }, [dispatch])
  
  
  return (
    <SingerWrapper>
      <ThemeHeaderSmall title="入驻歌手" more={{to: "#", text: "查看全部 >"}}/>
      <ul>{
        settledSingerList.map((singerItem) => {
          return (
            <SingerInfoItem key={singerItem.id}>
              <div className="head"><img src={singerItem.picUrl} alt=""/></div>
              <div className="ifo">
                <h4 className="alias text-nowrap"
                    title={singerItem.alias.length !== 0 ? singerItem.alias : singerItem.name}>
                  {singerItem.alias.length !== 0 ? singerItem.alias : singerItem.name}
                </h4>
                <p className="name">{singerItem.name}</p>
              </div>
            </SingerInfoItem>
          )
        })
      }</ul>
      <div className="recruit">
        <a className="sprite_button" rel="noopener noreferrer" href="https://music.163.com/recruit"
           target="_blank">申请成为网易音乐人</a>
      </div>
    </SingerWrapper>
  )
});
