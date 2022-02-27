import styled from "styled-components";

export const Wrapper = styled.div`
  border: solid #d3d3d3;
  border-width: 0 1px;
  display: flex;
  background-color: #fff;

  .left {
    width: 180px;
    background: #f9f9f9;

    .cates {
      margin-top: 50px;
      padding: 0 10px 40px;

      .cate {
        margin: 5px 0 0;
        padding-top: 16px;
        border-top: 1px solid #d3d3d3;

        &:nth-of-type(1) {
          border: none;
        }

        .cate-title {
          height: 25px;
          padding-left: 14px;
          font-size: 16px;
          font-family: "Microsoft Yahei";
          color: #333;
          font-weight: bold;
        }

        .cate-item {
          width: 160px;
          height: 29px;
          line-height: 29px;
          margin-bottom: 2px;

          a {
            display: inline-block;
            width: 100%;
            padding-left: 27px;
            background: url(${require("@/assets/img/singer.png")})  0 -30px;

            &.active {
              color: #c20c0c;
              background-position: 0 0;
            }

            //background-position: 0 -30px;
          }
        }
      }


    }
  }

  .right {
    flex: 1;
    border-left: 1px solid #d3d3d3;
    padding: 40px;

    .initial-list {
      display: flex;
      margin-top: 20px;
      justify-content: space-between;

      li {
        text-align: center;
        width: 21px;
        height: 24px;
        font-size: 14px;
        line-height: 24px;
        cursor: pointer;

        a {
          display: inline-block;
          color: #333;
          width: 100%;
          height: 100%;
        }

        &.active {
          background: #c20c0c;
          border-radius: 2px;

          a {
            color: #fff;
          }
        }

        //&:hover {
        //  text-decoration: underline;
        //}

        &:first-child,
        &:last-child {
          width: 45px;
          font-size: 12px;
        }
      }
    }

    .list {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 130px;
        margin-left: 16.7px;

        &:nth-of-type(5n+1) {
          margin-left: 0;
        }

        .cover {
          width: 130px;
          height: 130px;
          position: relative;

          .mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-position: 0 -680px;
          }
        }

        .desc {
          display: flex;
          margin-top: 8px;
          justify-content: space-between;

          .name {
            max-width: 80%;
          }

          .avatar {
            width: 17px;
            height: 18px;
            background-position: 0 -740px;
          }
        }
      }
    }

  }
`;
