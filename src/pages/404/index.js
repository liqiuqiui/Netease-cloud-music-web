//lib
import React, { memo } from "react";
import PropTypes from "prop-types";


const NotFound = memo(function NotFound(props) {
  return (
    <div className=" wrap-v2">
      <h1 style={{
        margin: "0 auto",
        lingHeight: "100px",
        padding: "50px 0",
        textAlign: "center",
        color: "#c20c0c"
      }}>找不到页面啦</h1>
    </div>
  )
});

NotFound.propTypes = {};
NotFound.defaultProps = {};

export default NotFound;
