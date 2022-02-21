import styled from "styled-components";

export const SongInfoWrapper = styled.div`
  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .feedback {
    margin-top: 50px;
    text-align: right;
  }

  .trans-user {
    text-align: right;
    line-height: 30px;
    color: #666;

    a {
      color: #0c73c2;;
    }
  }
`;

export const SongInfoLeft = styled.div`
  width: 206px;

  .cover-wrap {
    width: 198px;
    height: 198px;
    position: relative;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .mask {
      position: absolute;
      width: 206px;
      height: 205px;
      top: -4px;
      left: -4px;
      background-position: -140px -580px;
    }
  }

  .out {
    margin-top: 20px;
    height: 16px;
    text-align: center;

    i {
      display: inline-block;
      vertical-align: middle;
      width: 16px;
      height: 16px;
      background-position: -34px -863px;
      line-height: 21px;
      //margin-top: 3px;
    }

    a {
      color: #0c73c2;
      font-size: 12px;
      text-decoration: underline;
    }
  }
`;

export const SongInfoRight = styled.div`
  width: 414px;

  .song-name {

    .ico {
      float: left;
      width: 54px;
      height: 24px;
      background-position: 0 -463px;
    }

    .name {
      position: relative;
      top: -6px;
      font-size: 24px;
      margin-left: 64px;
      line-height: 1.2;

      .mv {
        display: inline-block;
        width: 21px;
        height: 18px;
        background-position: 0 -18px;
        margin-left: 10px;
        vertical-align: middle;
      }

      .alias {
        font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
        margin-bottom: 5px;
        color: #bababa;
        font-size: 14px;
      }

      em {
        font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      }
    }
  }

  p {
    margin: 10px 0;
    color: #999;

    a {
      color: #0c73c2;
    }
  }

  //.operates {
  //  display: flex;
  //  margin-bottom: 25px;
  //
  //  div {
  //    margin-right: 6px;
  //    height: 31px;
  //    line-height: 31px;
  //    padding-right: 4px;
  //    font-family: simsun, \\5b8b\\4f53;
  //    background-position: right -1020px;
  //    cursor: pointer;
  //
  //    i {
  //
  //      display: inline-block;
  //      height: 31px;
  //      line-height: 30px;
  //      min-width: 23px;
  //      padding-right: 2px;
  //      padding-left: 28px;
  //      background-position-x: 0;
  //    }
  //  }
  //
  //  div:nth-of-type(1) {
  //    width: 66px;
  //    background-position: right -428px;
  //    margin-right: 0;
  //    color: #fff;
  //    font-family: Arial, Helvetica, sans-serif;
  //
  //    i {
  //      line-height: 31px;
  //      overflow: hidden;
  //      vertical-align: top;
  //      text-align: center;
  //      background-position-y: -387px;
  //      padding: 0 7px 0 8px;
  //
  //      em {
  //        float: left;
  //        width: 20px;
  //        height: 18px;
  //        margin: 6px 2px 2px 0;
  //        background-position: 0 -1622px;
  //        overflow: hidden;
  //      }
  //    }
  //
  //    &:hover {
  //      background-position-y: -510px;
  //
  //      i {
  //        background-position-y: -469px;
  //      }
  //
  //      em {
  //        background-position-x: -28px;
  //      }
  //    }
  //
  //    &:active {
  //      background-position-y: -592px;
  //
  //      i {
  //        background-position-y: -551px;
  //      }
  //
  //      em {
  //        background-position-x: -56px;
  //      }
  //    }
  //
  //
  //  }
  //
  //  div:nth-of-type(2) {
  //    width: 31px;
  //    margin-left: -3px;
  //    padding-right: 0;
  //    background-position: 0 -1588px;
  //
  //    &:hover {
  //      background-position-x: -40px;
  //    }
  //
  //    &:active {
  //      background-position-x: -80px;
  //    }
  //  }
  //
  //  div:nth-of-type(3) {
  //    i {
  //      background-position-y: -977px;
  //    }
  //  }
  //
  //  div:nth-of-type(4) {
  //    i {
  //      background-position-y: -1225px;
  //    }
  //  }
  //
  //  div:nth-of-type(5) {
  //    i {
  //      background-position-y: -2761px;
  //
  //    }
  //  }
  //
  //  div:nth-of-type(6) {
  //    i {
  //      background-position-y: -1465px;
  //    }
  //  }
  //}

  .lyric-content {
    position: relative;
    line-height: 23px;
    overflow: hidden;

    p {
      margin: 0;
      color: #333;
    }
  }

  .show-more {
    color: #0c73c2;
    cursor: pointer;
    margin-top: 5px;

    &:hover {
      text-decoration: underline;
    }

    i {
      display: inline-block;
      width: 11px;
      height: 8px;
      background-position-y: -520px;
      vertical-align: middle;
    }
  }
`;
