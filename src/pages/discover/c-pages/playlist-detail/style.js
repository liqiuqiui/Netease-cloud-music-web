import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  border: solid #d3d3d3;
  border-width: 0 1px;
  background-color: #fff;
`;

export const Left = styled.div`

  padding: 47px 30px 40px 39px;
  border-right: 1px solid #d3d3d3;
  flex: 1;

  .left-head {
    flex: 1;
    display: flex;
    column-gap: 30px;


    .image {
      position: relative;
      width: 200px;
      height: 200px;

      .mask {
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: -4px;
        right: -4px;
        background-position: 0 -1285px;
      }
    }

    .info {
      .playlist-name {
        display: flex;
        column-gap: 10px;

        .ico {
          position: relative;
          width: 54px;
          height: 24px;
          background-position: 0 -243px;

          .R {
            position: absolute;
            display: inline-block;
            width: 8px;
            height: 8px;
            top: 2px;
            background-size: cover;
            left: 34px;
            z-index: 1;
          }
        }

        .name {
          flex: 1;
          line-height: 24px;
          font-size: 20px;
          font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
        }
      }
    }

    .user {
      display: flex;
      align-items: center;
      margin-top: 12px;
      margin-bottom: 20px;

      &-avatar {
        width: 35px;
        height: 35px;
        margin-right: 10px;
      }

      &-name {
        color: #0c73c2;
      }

      .detail-img {
        height: 13px;
        width: 13px;
        display: inline-block;
        vertical-align: middle;
      }

      .create-time {
        margin-left: 15px;
        color: #999;
      }
    }

    .tags {
      display: flex;
      line-height: 22px;

      a:nth-of-type(1) {
        margin-left: 0;
      }

      a {
        margin-left: 10px;
        padding: 0 10px 0 0;
        text-shadow: 0 1px #fdfdfd;
        background-position: right -27px;
        color: #777;
        text-decoration: none;
        height: 22px;
        line-height: 22px;

        //&:first-child {
        //  margin-left: 0;
        //}

        i {
          height: 22px;
          line-height: 22px;
          padding: 0 3px 0 13px;
          background-position: 0 0;
        }
      }
    }

    b {
      color: #666;
      font-weight: normal;
    }

    .desc {
      line-height: 18px;
      color: #666;
      margin-top: 8px;
      white-space: pre-line;
    }

  }


  .song-list {
    margin-top: 30px;

    .play:hover {
      background-position: 0 -128px;
    }

    .current-play {
      background-position: -20px -128px !important;
    }

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

    tbody {
      tr:hover td:nth-of-type(3) .time {
        display: none;
      }

      tr:hover td:nth-of-type(3) .operates {
        display: flex;
      }

      .mv {
        width: 23px;
        height: 17px;
        background-position: 0 -151px;
      }

      .mv:hover {
        background-position: -30px -151px;
      }

      td > div {
        padding: 5px 10px !important;
      }
    }

    .row {
      //cursor: pointer;

      .play:hover {
        background-position: 0 -128px;
      }

      .current-play {
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

    .list-more {
      width: 100%;
      height: 66px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      margin-top: 30px;
      margin-bottom: -10px;

      .text {
        font-size: 13px;
        color: #333333;
      }
    }

    .button {
      text-decoration: none;
      width: 120px;
      height: 30px;
      background-image: linear-gradient(90deg, #ff5a4c 0%, #ff1d12 100%);
      border-radius: 18px;
      line-height: 30px;
      font-size: 12px;
      color: #ffffff;
      text-align: center;
    }
  }

  .comment {
    margin-top: 40px;
  }
`;

export const Right = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;

  .playlist-fans {
    .fans-list {
      margin-bottom: 25px;
      margin-top: 7px;
      display: flex;
      column-gap: 13px;
      flex-wrap: wrap;

      li {
        margin-top: 13px;

        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }

`;
