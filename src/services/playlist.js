import request from "./request";

export const getCategories = ()=> request.get("/playlist/catlist")
