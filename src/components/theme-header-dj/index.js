//lib
import React, { memo } from "react";
import { string, exact, bool, oneOfType, element } from "prop-types";

//components
import { Wrapper } from "./style.js"
import { Link } from "react-router-dom";

const ThemeHeaderDj = memo(function ThemeHeaderDj(props) {
  const {more, title, showDjText, rightElement} = props;
  return (
    <Wrapper className="theme-header-dj">
      <h3 className="title">
        {
          typeof title === "object"
            ? <Link to={title.to}>{title.text}</Link>
            : <span>{title}</span>
        }
        {showDjText ? (<><span className="dot">·</span>电台</>) : ""}
      </h3>
      {rightElement
        ? rightElement
        : (more && <Link onClick={() => window.scrollTo(0, 0)}
                         className="more" to={more.to}>{more.text}</Link>)}
    </Wrapper>
  )
});

ThemeHeaderDj.propTypes = {
  title: oneOfType([
    exact({
      text: string,
      to: string,
    }),
    string
  ]).isRequired,
  more: exact({
    text: string,
    to: string,
  }),
  rightElement: element,
  showDjText: bool
};
ThemeHeaderDj.defaultProps = {
  showDjText: true
};

export default ThemeHeaderDj;
