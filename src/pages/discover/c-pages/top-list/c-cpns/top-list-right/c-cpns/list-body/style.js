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
    tbody {
      tr:hover td:nth-of-type(3) .time {
        display: none;
      }

      tr:hover td:nth-of-type(3) .operates {
        display: flex;
      }
      .mv{
        width: 23px;
        height: 17px;
        background-position: 0 -151px;
      }
      .mv:hover{
        background-position: -30px -151px;
      }
    }

    .row {
      //cursor: pointer;

      .play:hover {
        background-position: 0 -128px;
      }
      .current-play{
        background-position: -20px -128px !important;
      }

      .operates {
        width: 110%;
        display: none;
        justify-content: space-between;
        margin-right: -5px;

        i {
          display: inline-block;
          width: 18px;
          height: 16px;
          cursor: pointer;
        }

        .add-to {
          width: 13px;
          height: 13px;
          background-position: 0 -700px;

          &:hover {
            background-position-x: -22px;
          }
        }

        .favor {
          background-position: 0 -174px;

          &:hover {
            background-position-x: -20px;
          }
        }

        .share {
          background-position: 0 -195px;

          &:hover {
            background-position-x: -20px;
          }
        }

        .download {
          background-position: -81px -174px;

          &:hover {
            background-position-x: -104px;
          }
        }
      }
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
