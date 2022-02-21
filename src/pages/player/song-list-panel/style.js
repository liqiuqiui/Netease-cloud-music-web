import styled from "styled-components";

export const SongListPanelWrapper = styled.div`
  position: fixed;
  z-index: 98;
  bottom: ${props => props.isShowSongListPanel ? "45px" : "-301px"};
  left: 50%;
  transform: translateX(-50%);
  width: 986px;
  height: 301px;
  //background-color: lightpink;
  transition: bottom .2s linear;

  .list-head {
    position: relative;
    height: 41px;
    line-height: 41px;
    padding: 0 5px;
    background: url(${require("@/assets/img/playpanel_bg.png")}) 0 0;

    h4 {
      position: absolute;
      left: 25px;
      color: #e2e2e2;
      font-weight: bolder;
      font-size: 14px;
      //height: 39px;
      //line-height: 39px;
    }

    .add-all,
    .clear {
      height: 15px;
      line-height: 15px;
      position: absolute;
      left: 398px;
      top: 12px;
      color: #ccc;
      cursor: pointer;
      &:hover {
        color: #e2e2e2;
      }

      &:hover .favor {
        background-position-y: -20px;
      }

      .favor, .ico {
        //display: inline;
        float: left;
        width: 16px;
        height: 16px;
        margin-right: 6px;
        background-position: -24px 0;
      }
    }

    .line {
      position: absolute;
      top: 13px;
      left: 477px;
      height: 15px;
      border-left: 1px solid #000;
      border-right: 1px solid #2c2c2c;
    }

    .clear {
      left: 490px;

      &:hover .ico {
        background-position-y: -20px;
      }

      .ico {
        background-position: -51px 0;
      }
    }

    p {
      position: absolute;
      left: 595px;
      top: 0;
      width: 346px;
      text-align: center;
      height: 39px;
      line-height: 39px;
      color: #fff;
      font-size: 14px;
    }

    .close {
      position: absolute;
      top: 6px;
      right: 8px;
      width: 30px;
      height: 30px;
      overflow: hidden;
      text-indent: -999px;
      cursor: pointer;
      background-position: -195px 9px;

      &:hover {
        background-position-y: -21px;
      }
    }
  }

  .list-body {
    position: absolute;
    left: 0;
    top: 40px;
    width: 984px;
    //_width: 972px;
    height: 260px;
    overflow: hidden;
    background: url(${require("@/assets/img/playpanel_bg.png")}) -1014px 0 repeat-y;


    .bg-img {
      position: absolute;
      left: 2px;
      _left: 0;
      top: -1px;
      z-index: 1;
      width: 980px;
      height: auto;
      opacity: .2;
    }

    //.msk {
    //  position: absolute;
    //  left: 2px;
    //  top: 0;
    //  z-index: 2;
    //  width: 553px;
    //  height: 260px;
    //  background: #121212;
    //  opacity: .5;
    //  filter: Alpha(opacity=50);
    //}

    //&-wrap {
    //  position: absolute;
    //  left: 2px;
    //  _left: 0;
    //  top: 0;
    //  z-index: 4;
    //  height: 260px;
    //  width: 553px;
    //  overflow: hidden scroll;
    //
    //  &::-webkit-scrollbar {
    //    /*滚动条整体样式*/
    //    width: 6px;
    //    //height: 1px;
    //  }
    //
    //  &::-webkit-scrollbar-thumb {
    //    /*滚动条里面小方块*/
    //    border-radius: 5px;
    //    background: #868686;
    //    border: 1px solid #a6a6a6;
    //    opacity: .8;
    //  }
    //
    //  &::-webkit-scrollbar-track {
    //    /*滚动条里面轨道*/
    //    background: #000;
    //  }
    //}
  }
`;

// export const SongItem = styled.li`
//   //position: relative;
//   ${({index, currentIndex}) => {
//     if (currentIndex === index)
//       return "background-color: rgba(0, 0, 0, 0.4);color: #fff;"
//     else return "color: #ccc;"
//   }} //color:;
//   height: 28px;
//
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.4);
//     color: #fff;
//   }
//
//   &:hover .col3 {
//     visibility: visible;
//     //display: block;
//   }
//
//   .col {
//     float: left;
//     padding-left: 10px;
//     height: 28px;
//     line-height: 28px;
//     _line-height: 29px;
//     overflow: hidden;
//     cursor: pointer;
//   }
//
//   .col1 {
//     height: 28px;
//     width: 20px;
//     padding-left: 10px;
//
//     .play-ico {
//       visibility: ${({index, currentIndex}) => currentIndex === index ? "visible" : "hidden"};
//       width: 10px;
//       height: 13px;
//       background-position: -182px 0;
//       margin-top: 8px;
//     }
//   }
//
//   .col2 {
//     width: 266px;
//   }
//
//   .col3 {
//     //display: none;
//     //position: absolute;
//     visibility: hidden;
//     justify-content: space-evenly;
//     width: 100px;
//     height: 23px;
//     padding: 0;
//
//     i {
//       float: left;
//       height: 16px;
//       margin: 7px 0 0 10px;
//       background: url(${require("@/assets/img/playlist_sprite.png")}) no-repeat 0 9999px;
//       text-indent: -9999px;
//
//       &.del {
//         width: 13px;
//         background-position: -51px 0;
//
//       }
//
//       &.dl {
//         width: 14px;
//         background-position: -57px -50px;
//
//         &:hover {
//           background-position-x: -80px;
//         }
//       }
//
//       &.share {
//         width: 14px;
//         background-position: 0 0;
//
//       }
//
//       &.favor {
//         width: 16px;
//         background-position: -24px 0;
//       }
//
//       &.del,
//       &.share,
//       &.favor {
//         &:hover {
//           background-position-y: -20px;
//         }
//       }
//     }
//   }
//
//   .col4 {
//     width: 80px;
//
//     span {
//       width: 100%;
//     }
//   }
//
//   .col6 {
//     width: 37px;
//     height: 28px;
//
//     .from {
//       display: inline-block;
//       width: 14px;
//       height: 16px;
//       background-position: -100px 0;
//       float: right;
//       overflow: hidden;
//       margin-top: 8px;
//     }
//   }
// `;
