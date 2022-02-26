import styled from "styled-components";

export const Wrapper = styled.div`
  width: 426px;

  .rank-list {
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

  &:nth-child(even) {
    background-color: #f7f7f7;
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

  .desc {
    width: 208px;
    margin-left: 10px;

    p, h3 {
      height: 20px;
      font-size: 12px;
      line-height: 20px;
    }

    h3 {
      a {
        color: #333;
      }
    }

    p {
      a {
        color: #999;
      }
    }
  }

  .hot {
    display: block;
    width: 100px;
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
