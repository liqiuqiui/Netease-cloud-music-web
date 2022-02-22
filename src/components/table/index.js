//lib
import React, { memo } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"

const Table = memo(function Table(props) {
  // const indexClass = ['.first', '.second', '.third', '.fourth', '.fifth', '.sixth', '.seventh', '.eighth']
  const {columns, data} = props;
  return (
    <Wrapper className="list-table">
      <thead>
      <tr>{
        columns?.map((item) => {
          return (
            <th key={item.title} style={item.style} className="sprite_table">{item.title}</th>
          )
        })
      }
      </tr>
      </thead>
      <tbody>
      {
        data?.map((item, index) => {
          return (<tr className="row" key={index}>
            {
              columns?.map((column) => {
                return (
                  <td
                    key={column.title}
                    onMouseEnter={column?.onMouseEnter}
                    onMouseLeave={column.onMouseLeave}
                  >
                    <div style={{padding: index > 2 ? "5px 10px" : "10px"}}>
                      {
                        column?.render
                          ? column.render(item, index)
                          : (column.dataIndex ? item[column.dataIndex] : "")
                      }
                    </div>
                  </td>
                )
              })
            }
          </tr>)
        })
      }
      </tbody>
    </Wrapper>
  )
});

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.exact({
    style: PropTypes.object,
    dataIndex: PropTypes.string,
    key: PropTypes.any,
    title: PropTypes.string,
    render: PropTypes.func,
    index: PropTypes.bool,
    // onMouseEnter: PropTypes.func,
    // onMouseLeave: PropTypes.func
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
Table.defaultProp = {};

export default Table;
