import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  column-gap: 30px;

  .head-left {
    position: relative;
    width: 158px;
    height: 158px;
    border: 1px solid #ccc;
    padding: 3px;

    .mask {
      position: absolute;
      //top: 0;
      //left: 0;
      //width: 10px;
      //height: 10px;
      //background-color: red;

      width: 150px;
      height: 150px;
      background-position: -230px -380px;
      top: 3px;
      left: 3px;
    }
  }

  .head-right {
    .list-name {
      margin: 16px 0 4px;
      line-height: 24px;
      font-size: 20px;
      font-weight: normal;
    }

    .update-time {
      margin: 0 0 20px;
      line-height: 35px;

      i {
        display: inline-block;
        margin: 9px 5px 0 3px;
        width: 13px;
        height: 13px;
        background-position: -18px -682px;
      }

      span:nth-of-type(1) {
        color: #666;
      }

      span:nth-of-type(2) {
        color: #999;

      }

    }
  }
`;
