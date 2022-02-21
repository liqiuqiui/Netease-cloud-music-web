import styled from "styled-components";

export const LyricPanelWrapper = styled.div`
  position: absolute;
  //right: 40px;
  right: 0;
  //left: 0;
  bottom: 0;
  top: 0;
  z-index: 4;
  //margin: 21px 0 20px 0;
  //height: 219px;
  width: 430px;
  overflow: auto;

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

  //.msk {
  //  position: absolute;
  //  z-index: 99;
  //  left: 0;
  //  right: 0;
  //  top: 0;
  //  bottom: 0;
  //  //left: 560px;
  //  //_left: 560px;
  //  //left: -36px;
  //  //top: -21px;
  //  //right: -40px;
  //  //bottom: -21px;
  //  //transform: translate(-36px);
  //  //z-index: 3;
  //  //width: 420px;
  //  //height: 260px;
  //  background: #121212;
  //  //background: pink;
  //  opacity: .01;
  //}

  ul {
    //position: relative;
    text-align: center;
    color: #989898;
    line-height: 32px;
    height: auto;
    //transition: all .3s linear;
    li {
      width: 100%;
      height: auto;
      transition: color 0.7s ease-in;
    }

    .active {
      color: #fff;
      font-size: 15px;
    }
  }
`;
