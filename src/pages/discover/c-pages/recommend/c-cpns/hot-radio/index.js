import React, { memo } from "react";

import { hotRadios } from "../../../../../../common/local-data";

import { HotRadioWrapper, RadioItem } from "./style.js";
import ThemeHeaderSmall from "@/components/theme-header-small";


export default memo(function (props) {
  return (
    <HotRadioWrapper>
      <ThemeHeaderSmall title="热门主播"/>
      <ul style={{marginTop: "20px"}}>{
        hotRadios.map((item) => {
          return (
            <RadioItem key={item.id}>
              <div className="radio-avatar"><img src={item.picUrl} alt=""/></div>
              <div className="radio-info">
                <h4 className="name">{item.name}</h4>
                <p className="desc text-nowrap">{item.position}</p>
              </div>
            </RadioItem>
          )
        })
      }</ul>
    </HotRadioWrapper>
  )
});
