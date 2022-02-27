//lib
import React, { Fragment, memo, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"
import AlbumCover from "../../../../../../components/album-cover";
import { getAllAlbumList } from "../../../../../../services/album";
import { Link, useHistory, useLocation } from "react-router-dom";
import queryStringParser from "../../../../../../utils/queryStringParser";
import LPagination from "../../../../../../components/pagination";

const AllAlbum = memo(function AllAlbum(props) {
  const history = useHistory();
  const [dataList, setDataList] = useState({});
  const {search} = useLocation();
  const query = queryStringParser(search);
  const [area, setArea] = useState("ALL");
  const [page, setPage] = useState(1);
  const albumRef = useRef();
  const areaList = [
    {name: "全部", value: "ALL"},
    {name: "华语", value: "ZH"},
    {name: "欧美", value: "EA"},
    {name: "韩国", value: "KR"},
    {name: "日本", value: "JP"}
  ];
  useEffect(() => {
    setArea(query.area);
    setPage(+query.page);
  }, [search])
  
  useEffect(() => {
    getAllAlbumList({area, offset: (page - 1) * 35, limit: 35}).then(setDataList)
  }, [page, area]);
  
  const pageChange = (newPage) => {
    history.push(`/discover/album?page=${newPage}&area=${area}`);
    window.scrollTo(0, albumRef.current.offsetTop)
  }
  return (
    <Wrapper className="all-album" ref={albumRef}>
      <div className="header">
        <h3 className="title">全部新碟</h3>
        <div className="area-list">
          {
            areaList.map((item, index) => {
              return (
                <Fragment key={item.name}>
                  {index > 0 && <span className="line">|</span>}
                  <Link className={item.value === area ? "active" : ""}
                        to={`/discover/album?page=${page}&area=${item.value}`}>{item.name}</Link>
                </Fragment>
              )
            })
          }
        </div>
      </div>
      <div className="album-list">
        {
          dataList?.albums?.map(item => {
            return (<AlbumCover style={{paddingBottom: "30px"}} key={item.id} info={item}/>)
          })
        }
      </div>
      <LPagination onChange={pageChange}
                   total={dataList.total || 0}
                   pageSize={35}
                   currentPage={page}/>
    </Wrapper>
  )
});

AllAlbum.propTypes = {};
AllAlbum.defaultProps = {};

export default AllAlbum;
