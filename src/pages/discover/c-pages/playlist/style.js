import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px;
  width: 900px;
  box-sizing: content-box;
  border: solid #ccc;
  border-width: 0 1px;
  background-color: #fff;
  .playlist-title {
    height: 42px;
    border-bottom: 2px solid #c20c0c;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title-left {
      font-size: 24px;
      display: flex;
      justify-content: center;

      span:last-child {
        display: inline-block;
        font-size: 12px;
        font-weight: normal;
        margin: 2px 0 0 12px;
        background-position: right -100px;
        padding-right: 5px;

        i {
          display: inline-block;
          color: #0c73c2 !important;
          height: 31px;
          line-height: 31px;
          padding: 0 10px 0 15px;
          background-position: 0 -59px;

          em {
            display: inline-block;
            margin-left: 5px;
            width: 8px;
            height: 5px;
            background-position: -70px -543px;
          }
        }
      }
    }

    .title-right {
      display: inline-block;
      background-position: 0 0;
      border-radius: 3px;

      a {
        color: #fff;
        display: inline-block;
        width: 46px;
        height: 29px;
        line-height: 29px;
        text-align: center;
      }
    }
  }

  .cate-pop {
    position: relative;
    left: -30px;
    top: 5px;
    //margin-top: 10px;
    width: 700px;
    box-sizing: content-box;
    border: 1px solid #ccc;
    background-color: #fefefe;
    box-shadow: 0 0 10px 2px #d3d3d3;
    border-radius: 5px;

    .cate-arrow {
      position: absolute;
      top: -12px;
      left: 120px;
      display: inline-block;
      width: 24px;
      height: 11px;
      background-position: -48px 0;
      vertical-align: middle;
    }

    .all-cate {
      height: 58px;
      margin-left: 26px;
      line-height: 58px;

      a {
        display: inline-block;
        width: 75px;
        height: 26px;
        background-position: 0 -64px;
        text-align: center;
        line-height: 26px;
        color: #333;
      }
    }

    .cate-list {
      border-top: 1px solid #e6e6e6;

      .row {
        display: flex;

        .cate-name {
          position: relative;
          width: 96px;
          padding-top: 16px;
          white-space: nowrap;
          font-weight: bold;
          margin-left: 26px;

          i {
            display: inline-block;
            margin-right: 8px;
            width: 24px;
            height: 24px;
          }

          > span {
            position: absolute;
            top: 19px;
          }

        }

        .cates {
          box-sizing: content-box;
          padding: 15px 15px 0;
          line-height: 24px;
          width: 573px;
          border-left: 1px solid #e6e6e6;

          a {
            white-space: nowrap;
            color: #333;
          }

          .line {
            margin: 0 8px 0 10px;
            color: #d8d8d8;
          }
        }
      }

      li:last-child .cates {
        padding-bottom: 25px;
      }

      li:nth-of-type(1) .cate-name i {
        width: 23px;
        height: 23px;
        background-position: -20px -735px;
      }

      li:nth-of-type(2) .cate-name i {
        background-position: 0 -60px;
      }

      li:nth-of-type(3) .cate-name i {
        background-position: 0 -88px;
      }

      li:nth-of-type(4) .cate-name i {
        background-position: 0 -117px;
      }

      li:nth-of-type(5) .cate-name i {
        background-position: 0 -141px;
      }

    }

  }

`;
