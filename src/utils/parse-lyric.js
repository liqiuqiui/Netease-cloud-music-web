export function parseLyric(lyrics) {
  const lyric = lyricParser(lyrics.lrc.lyric);
  const tLyric = lyricParser(lyrics.tlyric.lyric);
  const mixLyricList = []
  
  let skip = -1;
  //如果有译文
  if (tLyric.length !== 0)
    for (let i = lyric.length - 1; i >= 0; i--) {
      if (lyric[i].time === tLyric[0].time) {
        skip = i;
        break;
      }
    }
  
  for (let i = 0; i < lyric.length; i++) {
    mixLyricList[i] = {
      time: lyric[i].time,
      content: {origin: "", translate: ""}
    }
    
    mixLyricList[i].content.origin = lyric[i].content;
    if (i >= skip && skip !== -1)
      mixLyricList[i].content.translate = tLyric[i - skip]?.content;
  }
  
  return mixLyricList;
}

function lyricParser(lyricString) {
  const lyricList = [];
  const regExp = /\[(\d+):(\d+)\.(\d+)\]/;
  const lines = lyricString.split("\n");
  
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

  return lyricList;
}
