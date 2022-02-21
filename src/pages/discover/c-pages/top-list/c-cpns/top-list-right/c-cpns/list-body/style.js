import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 30px 40px 40px;

  .list-title {
    //box-sizing: content-box;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #c20c0c;
    height: 35px;

    .title-left {
      display: flex;
      align-items: center;

      h3 {
        //font-weight: bold;
        font-size: 20px;
        line-height: 40px;
      }

      span {
        margin-left: 15px;
        color: #666;
      }
    }

    .title-right {
      display: flex;
      align-items: center;

      strong {
        color: #c20c0c;
        //margin-left: 10px;
      }
    }
  }

  .list-content {
    .row {
      cursor: pointer;
    }

    //.content-head {
    //  height: 38px;
    //  background-color: #f7f7f7;
    //  background-position: 0 0;
    //  background-repeat: repeat-x;
    //
    //  span {
    //    display: inline-block;
    //    margin-left: 100px;
    //    padding: 0 20px;
    //    //border: solid #ccc;
    //    //border-width: 0 1px;
    //    height: 100%;
    //    background-position: 0 -56px;
    //  }
    //}
  }

  //.list-table {
  //  width: 100%;
  //  border: 1px solid #d9d9d9;
  //  border-collapse: collapse;
  //  border-spacing: 0;
  //  table-layout: fixed;
  //
  //  thead {
  //    tr {
  //      height: 38px;
  //      background: #f6f6f6;
  //      border-bottom: 1px solid #ccc;
  //
  //      th {
  //        border-left: 1px solid #ccc;
  //        padding-left: 10px;
  //        font-weight: normal;
  //        color: #666;
  //
  //        &:nth-of-type(1) {
  //          border-left: none;
  //        }
  //      }
  //
  //
  //      .first {
  //        width: 77px;
  //      }
  //    }
  //  }
  //}
`;
