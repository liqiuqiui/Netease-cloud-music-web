//lib
import React, { memo, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";


const NotFound = memo(function NotFound(props) {
  const [countDown, setCountDown] = useState(3);
  const history = useHistory();
  let timer = useRef(0);
  // let timer = null;
  useEffect(() => {
    timer.current = setInterval(() => {
      setCountDown(v => v - 1);
    }, 1000);
    return () => {
      clearInterval(timer.current);
    }
  }, []);
  useEffect(() => {
    if (countDown === 0) {
      clearInterval(timer.current);
      history.goBack();
    }
  }, [countDown])
  return (
    <div className=" wrap-v2">
      <h1 style={{
        margin: "0 auto",
        lingHeight: "100px",
        padding: "50px 0",
        textAlign: "center",
        color: "#c20c0c"
      }}>找不到页面啦</h1>
      <h3 style={{textAlign: "center", marginBottom: "30px"}}>
        {countDown}s后返回上一级页面，
        <span onClick={e => history.goBack()} style={{
          color: "#c20c0c",
          textDecoration: "underline",
          cursor: "pointer"
        }}>立即返回</span>
      </h3>
    </div>
  )
});

NotFound.propTypes = {};
NotFound.defaultProps = {};

export default NotFound;
