import styled from "styled-components";

export const ListPanelWrapper = styled.div`

  position: absolute;
  left: 2px;
  _left: 0;
  top: 0;
  z-index: 4;
  height: 260px;
  width: 553px;
  overflow: hidden auto;

  ul {
    position: relative;
    z-index: 4;
    margin-right: 7px;
  }

  .msk {
    position: fixed;
    left: 2px;
    top: 40px;
    z-index: 2;
    width: 546px;
    height: 260px;
    background: #121212;
    opacity: .5;
    filter: Alpha(opacity=50);
  }

  .no-content {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    z-index: 4;
    color: #aaa;
    text-align: center;
    line-height: 43px;

    .ico {
      display: inline-block;
      width: 36px;
      height: 29px;
      background-position: -138px 0;
      vertical-align: middle;
      margin-right: 5px;
    }

    a {
      color: white;
    }
  }

  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 6px;
    //height: 1px;
  }

  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    background: #868686;
    border: 1px solid #a6a6a6;
    opacity: .8;
  }

  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    background: #000;
  }

`;


export const SongItem = styled.li`
  //position: relative;
  ${({index, currentIndex}) => {
    if (currentIndex === index)
      return "background-color: rgba(0, 0, 0, 0.4);color: #fff;"
    else return "color: #ccc;"
  }} //color:;
  height: 28px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
  }

  &:hover .col3 {
    visibility: visible;
    //display: block;
  }

  .col {
    float: left;
    padding-left: 10px;
    height: 28px;
    line-height: 28px;
    _line-height: 29px;
    overflow: hidden;
    cursor: pointer;
  }

  .col1 {
    height: 28px;
    width: 20px;
    padding-left: 10px;

    .play-ico {
      visibility: ${({index, currentIndex}) => currentIndex === index ? "visible" : "hidden"};
      width: 10px;
      height: 13px;
      background-position: -182px 0;
      margin-top: 8px;
    }
  }

  .col2 {
    width: 266px;
  }

  .col3 {
    //display: none;
    //position: absolute;
    visibility: hidden;
    justify-content: space-evenly;
    width: 100px;
    height: 23px;
    padding: 0;

    i {
      float: left;
      height: 16px;
      margin: 7px 0 0 10px;
      background: url(${require("@/assets/img/playlist_sprite.png")}) no-repeat 0 9999px;
      text-indent: -9999px;

      &.del {
        width: 13px;
        background-position: -51px 0;

      }

      &.dl {
        width: 14px;
        background-position: -57px -50px;

        &:hover {
          background-position-x: -80px;
        }
      }

      &.share {
        width: 14px;
        background-position: 0 0;

      }

      &.favor {
        width: 16px;
        background-position: -24px 0;
      }

      &.del,
      &.share,
      &.favor {
        &:hover {
          background-position-y: -20px;
        }
      }
    }
  }

  .col4 {
    width: 80px;

    span {
      width: 100%;
    }
  }

  .col6 {
    width: 25px;
    height: 28px;
    padding-left: 0;

    .from {
      display: inline-block;
      width: 14px;
      height: 16px;
      background-position: -100px 0;
      float: right;
      overflow: hidden;
      margin-top: 8px;
      //display:none;
    }
  }
`;
