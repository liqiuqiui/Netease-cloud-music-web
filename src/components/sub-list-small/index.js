//lib
import React, { memo } from "react";
import PropTypes from "prop-types";

//types
import { LinkToType } from "../../types";

//components
import { Wrapper } from "./style.js"
import ThemeHeaderSmall from "../theme-header-small";
import { Link } from "react-router-dom";


const SubListSmall = memo(function SubListSmall(props) {
  const {bottomEle, title, listData, fieldMap, to} = props;
  const toIsFun = typeof to === "function";
  return listData?.length > 0 ? (
    <Wrapper>
      <ThemeHeaderSmall title={title}/>
      <ul>
        {listData?.map(data => {
          return (
            <li key={fieldMap.id ? data[fieldMap.id] : data.id}>
              <Link
                title={fieldMap.content ? data[fieldMap.content] : data.content}
                className="left"
                to={toIsFun ? to(data) : "#"}>
                <img src={(fieldMap.imgUrl ? data[fieldMap.imgUrl] : data.imgUrl) + "?param=50y50"} alt=""/>
              </Link>
              <div className="right">
                <Link
                  title={fieldMap.content ? data[fieldMap.content] : data.content}
                  className="top text-nowrap"
                  to={toIsFun ? to(data) : "#"}>
                  {fieldMap.content ? data[fieldMap.content] : data.content}
                </Link>
                {bottomEle(data)}
              </div>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  ) : <></>
});

SubListSmall.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.exact({
      text: PropTypes.string,
      to: LinkToType
    })
  ]).isRequired,
  bottomEle: PropTypes.func.isRequired,
  listData: PropTypes.arrayOf(PropTypes.object).isRequired,
  fieldMap: PropTypes.exact({
    imgUrl: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.any,
    // to: PropTypes.string.isRequired,
  }),
  to: PropTypes.func.isRequired,
};


export default SubListSmall;

