import React, { memo } from "react";

import { PaginationWrapper } from "./style.js";
import { Pagination } from "antd";
import PropTypes from "prop-types";

const LPagination = memo(function LPagination(props) {
  const {currentPage, total, pageSize, onChange} = props;
  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <button className="prev">上一页</button>;
    }
    if (type === 'next') {
      return <button className="next">下一页</button>;
    }
    return originalElement;
  }
  
  return (
    <PaginationWrapper>
      <Pagination
        current={currentPage}
        // defaultCurrent={1}
        pageSize={pageSize}
        showSizeChanger={false}
        showQuickJumper={false}
        total={total}
        itemRender={itemRender}
        onChange={onChange}/>
    </PaginationWrapper>
  )
});
LPagination.propTypes = {
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
}
LPagination.defaultProps = {
  pageSize: 20,
  currentPage: 1
  // onChange: () => ({})
}
export default LPagination;
