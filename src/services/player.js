import request from "./request";

export const getSongDetails = (ids) => request.get("/song/detail", {
  params: {
    ids
  }
})

export const getSongLyric = (id) => request.get('/lyric', {
  params: {id}
})
