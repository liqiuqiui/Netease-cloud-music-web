//lib
import React, { memo } from "react";
import { string, number, oneOfType, arrayOf, exact, element, bool } from "prop-types";

//components
import { Wrapper } from "./style.js"
import ThemeHeaderDj from "../../../../../../../../components/theme-header-dj";
import { Link } from "react-router-dom";

const CateRecommend = memo(function CateRecommend(props) {
  const {rightElement, showDjText, dataList, more, title} = props;
  return (
    <Wrapper>
      <ThemeHeaderDj
        more={more}
        title={title}
        rightElement={rightElement}
        showDjText={showDjText}
      />
      <ul>{
        dataList?.slice(0, 4)?.map(item => {
          return (
            <li key={item.id} className="item-list">
              <Link to={"/discover/djradio/detail?id=" + item.id} className="item-left">
                <img src={item.imgUrl} alt=""/>
              </Link>
              <div className="item-right">
                <h3 className="title" title={item.title}>
                  <Link to={"/discover/djradio/detail?id=" + item.id}>{item.title}</Link>
                </h3>
                <p className="desc">{item.desc}</p>
              </div>
            </li>
          )
        })
      }</ul>
    </Wrapper>
  )
});

CateRecommend.propTypes = {
  dataList: arrayOf(exact({
    imgUrl: string,
    id: oneOfType([number, string]),
    title: string,
    desc: string
  })).isRequired,
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
  }).isRequired,
  rightElement: element,
  showDjText: bool
};
CateRecommend.defaultProps = {};

export default CateRecommend;
