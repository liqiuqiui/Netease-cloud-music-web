import styled from "styled-components";
import request from "../../services/request";

export const PaginationWrapper = styled.div`
  text-align: center;

  .prev {
    width: 47px;
    padding-left: 22px;
    background-position: 0 -560px;
  }

  .next {
    width: 57px;
    padding-left: 12px;
    background-position: -75px -560px;
  }

  .ant-pagination-jump-next {
    margin-right: 0 !important;
  }

  .ant-pagination-disabled {
    button {
      color: #cacaca !important;
      cursor: default !important;
    }

    .prev {
      background-position: 0 -620px !important;

    }

    .next {
      background-position: -75px -620px !important;

    }
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    margin-right: 0;
    margin-top: -1.5px;

    &:hover button {
      background-position-y: -590px;
      border-color: #ccc;
    }
  }

  //li[title="Previous Page"],
  //li[title="Next Page"]{
  //  height: 26px;
  //}
  button {
    box-sizing: content-box;
    height: 24px;
    line-height: 24px;
    color: #333;
    text-align: left;
    padding: 0;
    background: url(${require("@/assets/img/sprite_button2.png")}) no-repeat 0 -650px;
    font-size: 12px;
    margin: 0 1px 0 2px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 2px;
    vertical-align: middle;
  }

  .ant-pagination-item-ellipsis, .ant-pagination-item-link-icon {
    color: #c20c0c !important;
  }

  .ant-pagination-item {
    height: auto;
    width: auto;
    padding: 0;
    margin: 0;
    line-height: 0;
    border: none;

    &:hover a {
      color: #333;
      border-color: #666;;
    }

    &.ant-pagination-item-active {
      a {
        //background-position: 0 -650px;
        border-color: #A2161B;
        color: #fff;
        cursor: default;
        background: url(${require("@/assets/img/sprite_button2.png")}) no-repeat 0 -650px;

      }

    }

    a {
      height: 24px;
      padding: 0 8px;
      background-color: #fff;
      line-height: 24px;
      margin: 0 1px 0 2px;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 2px;
      vertical-align: middle;
      font-size: 12px;
      color: #333;

    }
  }
`;
