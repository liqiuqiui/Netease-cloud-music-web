//lib
import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const Singer = memo(function Singer(props) {
  const {singerList, splitSpace} = props;
  // console.log("sp", splitSpace)
  return singerList?.map((item, index) => {
    return (<span key={item.id}>
                  {index === 0 ? "" : (splitSpace ? " / " : "/")}
      <Link to={"/artist?id=" + item.id}>{item.name}</Link>
                </span>)
  })
});

Singer.propTypes = {
  singerList: PropTypes.array,
  splitSpace: PropTypes.bool,
};
Singer.defaultProps = {
  singerList: [],
  splitSpace: true,
};

export default Singer;
