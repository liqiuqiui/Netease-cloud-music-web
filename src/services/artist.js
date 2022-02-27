import request from "./request";

export const getArtistList = (params = {
  limit: 30,
  offset: 0,
  initial: -1,
  type: -1,
  area: -1
}) => request.get("/artist/list", {params});
