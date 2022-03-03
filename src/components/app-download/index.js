import React, { memo } from "react";

import { AppDownLoadWrapper } from "./style.js";
import ThemeHeaderSmall from "../theme-header-small";

const AppDownload = memo(function AppDownload(props) {
  return (
    <AppDownLoadWrapper>
      <ThemeHeaderSmall title={"网易云音乐多端下载"}/>
      <ul className="sprite_download">
        <li>
          <a className="sprite_download ios"
             href="https://itunes.apple.com/cn/app/id590338362">IPhone</a>
        </li>
        <li>
          <a className="sprite_download pc"
             href="https://music.163.com/api/pc/download/latest">PC</a>
        </li>
        <li>
          <a className="sprite_download android"
             href="https://music.163.com/api/android/download/latest2">Android</a>
        </li>
      </ul>
      <span>同步歌单，随时畅听320k好音乐</span>
    </AppDownLoadWrapper>
  )
});

export default AppDownload;
