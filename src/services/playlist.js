import request from "./request";

//获取所有分类列表
export const getCategories = () => request.get("/playlist/catlist")

//获取某个分类下的数据
export const getCatePlaylist = (
  cat = "全部",
  order = "hot",
  limit = 35,
  offset = 0,
) => request.get("/top/playlist", {
  params: {
    cat, order, offset, limit
  }
})
