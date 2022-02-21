//lib
import React, { memo } from "react";
import PropTypes from "prop-types";

//components
import { Wrapper } from "./style.js"

const Table = memo(function Table(props) {
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
        {/*<th className="first"/>*/}
        {/*<th className="second">标题</th>*/}
        {/*<th className="third">时长</th>*/}
        {/*<th className="fourth">歌手</th>*/}
      </tr>
      </thead>
      <tbody>
      {
        data?.map((item, index) => {
          return (<tr className="row" key={item.name}>
            {
              columns?.map((column) => {
                return (
                  <td key={column.title}>
                    <div>
                      {
                        column?.render
                          ? column.render(item, column.index ? index : "")
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
      {/*<tr>*/}
      {/*  <td>1</td>*/}
      {/*  <td>2</td>*/}
      {/*  <td>3</td>*/}
      {/*  <td>4</td>*/}
      {/*</tr>*/}
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
    index: PropTypes.bool
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
Table.defaultProp = {};

export default Table;
