import styled from "styled-components";

export const Wrapper = styled.div`
  .rank-header {
    height: 42px;
    border-bottom: 2px solid rgb(194, 12, 12);
    display: flex;
    justify-content: space-between;
    //align-items: center;

    .left {
      display: flex;

      .title {
        font-size: 24px;
      }

      span {
        margin: 13px 0 0 10px;
        color: #999;
      }
    }

    .info {
      align-self: flex-end;
      position: relative;

      i {
        width: 18px;
        height: 18px;
        background-position: 0 -50px;
        cursor: pointer;
      }

      &:hover .tip {
        display: block;

      }

      .tip {
        display: none;
        position: absolute;
        top: 13px;
        right: -41px;
        width: 295px;
        height: 43px;
        padding: 24px 19px 19px 19px;
        line-height: 20px;
        z-index: 9999;
        background: url(${require("@/assets/img/tip.png")});
        box-sizing: content-box;
      }
    }
  }

  .djradio-rank-list {
    ul {
      border: 1px solid #e2e2e2;
      border-top: none;
    }
  }
`;

export const Li = styled.li`
  display: flex;
  padding: 10px 0;
  height: 60px;
  align-items: center;

  &:nth-of-type(1),
  &:nth-of-type(2),
  &:nth-of-type(3) {
    .rank {
      em {
        color: #da4545;
      }
    }
  }

  &:hover {
    background-color: #eee !important;
  }

  &:hover .play .icon {
    display: block;
  }

  .rank {
    width: 47px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;

    em {
      font-size: 14px;
      color: #999;
    }

    span {
      color: ${({rankDiff}) => {
        if (rankDiff === 0) {
          return "#999";
        } else if (rankDiff > 0) {
          return "#4abbeb"
        } else if (rankDiff < 0) {
          return "#ba2226"
        }
      }};
    }

    i {
      display: inline-block;
      ${({lastRank}) => {
        // console.log("style:")
        if (lastRank === -1) {
          return "width: 16px;height: 17px;";
        } else {
          return "width: 6px;height: 6px;"
        }
      }}
      margin-right: 2px;
      background-position: ${({rankDiff, lastRank}) => {
        if (lastRank === -1)
          return "-67px -283px"
        if (rankDiff === 0) {
          return "-74px -274px";
        } else if (rankDiff > 0) {
          return "-74px -324px"
        } else if (rankDiff < 0) {
          return "-74px -304px"
        }
      }
      };
    }
  }

  .play {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;

    .icon {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 22px;
      height: 22px;
      background-position: 0 -85px;
    }
  }

  .name {
    width: 304px;
    margin-left: 10px;

    h3 {
      height: 20px;
      font-size: 12px;
      line-height: 20px;

      a {
        color: #333;
      }
    }
  }

  .desc {
    width: 176px;

    p {
      height: 20px;
      font-size: 12px;
      line-height: 20px;

      a {
        color: #999;
      }
    }
  }

  .cate {
    width: 140px;
    margin-left: 10px;

    a {
      border: 1px solid #999;
      color: #999;
      height: 18px;
      line-height: 16px;
      padding: 0 6px;
      text-decoration: none;

      &:hover {
        border-color: #666;
        color: #666;
      }
    }
  }

  .hot {
    display: block;
    width: 100px;
    //box-sizing: content-box;
    height: 8px;
    background-position: 0 -240px;

    i {
      height: 8px;
      display: block;
    }

    & > i {
      padding: 0 4px;
      background-position: right -318px;

      > i {
        margin-left: -4px;
        padding: 0 0 0 4px;
        background-position: 0 -304px;
      }
    }
  }

`;
