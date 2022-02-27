//lib
import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"
import { getHotAlbumList } from "../../../../../../services/album";
import AlbumCover from "../../../../../../components/album-cover";


const HotAlbum = memo(function HotAlbum(props) {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    getHotAlbumList().then(res => {
      console.log(res)
      setDataList(res.albums)
    })
  }, [])
  
  
  return (
    <Wrapper className="hot-album">
      <div className="header">
        <h3 className="title">热门新碟</h3>
      </div>
      <div className="list">
        {
          dataList?.slice(0, 10)?.map(item => {
            return (
              <AlbumCover style={{paddingBottom: "30px"}} key={item.id} info={item}/>
            )
          })
        }
      </div>
    </Wrapper>
  )
});

HotAlbum.propTypes = {};
HotAlbum.defaultProps = {};

export default HotAlbum;
