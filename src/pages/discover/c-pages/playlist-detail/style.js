import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  border: solid #d3d3d3;;
  border-width: 0 1px;
  background-color: #fff;
`;

export const Left = styled.div`
  padding: 47px 30px 40px 39px;
  border-right: 1px solid #d3d3d3;
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
  }
`;

export const Right = styled.div`
  width: 270px
`;
