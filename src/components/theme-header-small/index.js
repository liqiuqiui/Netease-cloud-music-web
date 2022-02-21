import React, { memo } from "react";
import PropTypes from "prop-types"


import { ThemeHeaderSmallWrapper } from "./style.js";
import { Link } from "react-router-dom";
import { LinkToType } from "../../types";


const ThemeHeaderSmall = memo(function ThemeHeaderSmall(props) {
  const {more, title} = props;
  return (
    <ThemeHeaderSmallWrapper>
      {typeof title === "string"
        ? <span className="title">{title}</span>
        : <Link to={title.to}>{title.text}</Link>
      }
      
      {more && <Link className="more" to={more.to}>{more.text}</Link>}
    </ThemeHeaderSmallWrapper>
  )
});
ThemeHeaderSmall.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.exact({
      to: LinkToType,
      text: PropTypes.string.isRequired
    })
  ]).isRequired,
  more: PropTypes.exact({
    to: LinkToType,
    text: PropTypes.string.isRequired
  })
}
ThemeHeaderSmall.defaultProps = {
  // more: {to: "#", text: "查看全部 >"}
}
export default ThemeHeaderSmall;
