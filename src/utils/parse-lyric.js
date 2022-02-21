export function parseLyric(lyrics) {
  // console.log(lyrics)
  // const lyricList = [];
  // const regExp = /\[(\d+):(\d+)\.(\d+)\]/;
  // const lines = lyricString.split("\n");
  // // console.log(lines)
  // for (const line of lines) {
  //   if (!line) continue;
  //   const matchRes = regExp.exec(line);
  //   const time1 = +matchRes[1] * 60 * 1000;
  //   const time2 = +matchRes[2] * 1000;
  //   const time3 = +(matchRes[3].padEnd(3, '0'));
  //   const time = time1 + time2 + time3;
  //   const content = line.replace(regExp, "");
  //   const lyricObj = {time, content};
  //   lyricList.push(lyricObj);
  // }
  // return lyricList//.filter(item => !!item.content);
  //
  // const res = {
  //   lyric: lyricParser(lyrics.lrc.lyric),
  //   tLyric: lyricParser(lyrics.tlyric.lyric)
  // }
  // console.log(lyrics)
  const lyric = lyricParser(lyrics.lrc.lyric);
  const tLyric = lyricParser(lyrics.tlyric.lyric);
  const mixLyricList = []
  // console.log("lyric", lyric)
  // console.log("tLyric", tLyric)
  let skip = -1;
  //如果有译文
  if (tLyric.length !== 0)
    for (let i = lyric.length - 1; i >= 0; i--) {
      if (lyric[i].time === tLyric[0].time) {
        skip = i;
        break;
      }
    }
  // skip = lyric.findLastIndex(i => i.time === tLyric[0].time);
  // console.log(skip)
  for (let i = 0; i < lyric.length; i++) {
    mixLyricList[i] = {
      time: lyric[i].time,
      content: {origin: "", translate: ""}
    }
    // console.log(mixLyricList)
    mixLyricList[i].content.origin = lyric[i].content;
    if (i >= skip && skip !== -1)
      mixLyricList[i].content.translate = tLyric[i - skip].content;
  }
  // console.log("mix:", mixLyricList);
  return mixLyricList;
}

function lyricParser(lyricString) {
  const lyricList = [];
  const regExp = /\[(\d+):(\d+)\.(\d+)\]/;
  const lines = lyricString.split("\n");
  // console.log(lines)
  for (const line of lines) {
    if (!line || !regExp.exec(line)) continue;
    const matchRes = regExp.exec(line);
    const time1 = +matchRes[1] * 60 * 1000;
    const time2 = +matchRes[2] * 1000;
    const time3 = +(matchRes[3].padEnd(3, '0'));
    const time = time1 + time2 + time3;
    const content = line.replace(regExp, "");
    const lyricObj = {time, content};
    lyricList.push(lyricObj);
  }
  // console.log(lyricList)
  return lyricList//.filter(item => !!item.content);
}
