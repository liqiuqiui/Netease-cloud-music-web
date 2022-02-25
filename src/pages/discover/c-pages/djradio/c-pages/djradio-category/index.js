//lib
import React, { memo } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"

const DjRadioCategory = memo(function DjRadioCategory(props) {
  return (
    <Wrapper>
      分类页
    </Wrapper>
  )
});

DjRadioCategory.propTypes = {};
DjRadioCategory.defaultProps = {};

export default DjRadioCategory;
