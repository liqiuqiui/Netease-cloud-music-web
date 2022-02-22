import styled from "styled-components";

export const Wrapper = styled.table`
  width: 100%;
  border: 1px solid #d9d9d9;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;

  thead {
    tr {
      height: 34px;
      background: #f6f6f6;
      border-bottom: 1px solid #ccc;

      th {
        border-left: 1px solid #ccc;
        padding-left: 10px;
        font-weight: normal;
        color: #666;
        background-position: 0 0;
        background-repeat: repeat-x;

        &:nth-of-type(1) {
          border-left: none;
        }
      }


      .first {
        width: 77px;
      }
    }
  }

  tbody {
    tr {
      td {
        > div {
          //padding: 10px;
          display: flex;
          align-items: center;
          column-gap: 10px;
          overflow: hidden;

          //&:nth-of-type(-n+3) {
          //  padding: 10px;
          //}
        }


        .play {
          display: inline-block;
          width: 17px;
          height: 17px;
          cursor: pointer;
          background-position: 0 -103px;
        }
      }

      &:nth-of-type(odd) {
        background-color: #f7f7f7;
      }
    }

  }
`;
