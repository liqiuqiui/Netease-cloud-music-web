//lib
import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"
import { shallowEqual, useSelector } from "react-redux";
// import { getDjRadioCategoriesAction } from "../../store/actionCreators";
import { Link, useLocation } from "react-router-dom";
import queryStringParser from "../../../../../../utils/queryStringParser";

const DjRadioCategoryList = memo(function DjRadioCategoryList(props) {
  const {search} = useLocation();
  const query = queryStringParser(search);
  

  
  const {djRadioCategories} = useSelector(state => ({
    djRadioCategories: state.getIn(["djRadio", "djRadioCategories"]),
  }), shallowEqual);
  
  // useEffect(() => {
  //   console.log(djRadioCategories)
  // }, [djRadioCategories]);
  
  
  return (
    <Wrapper className="dj-radio">
      <ul>{
        djRadioCategories.map((item) => {
          return (
            <li key={item.id} className="dj-radio-item">
              <Link className={"radio-bg " + (+query.id === item.id ? "active" : "")}
                    to={"/discover/djradio/category?id=" + item.id}>
                <div style={{
                  backgroundImage: `url(${item.picWebUrl})`
                }} className="icon"/>
                <span>{item.name}</span>
              </Link>
            </li>
          )
        })
      }</ul>
    </Wrapper>
  )
});

DjRadioCategoryList.propTypes = {};
DjRadioCategoryList.defaultProps = {};

export default DjRadioCategoryList;
