import styled from 'styled-components';

export const PlayBarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: ${props => {
    const {isPlayBarLocked, isShowPlayBar, isShowSongListPanel} = props;
    if (isPlayBarLocked || isShowSongListPanel) return 0;
    return isShowPlayBar ? 0 : "-45px";
  }};
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;
  transition: bottom 0.5s ease-out;

  .hand {
    position: absolute;
    z-index: 0;
    top: -10px;
    width: 100%;
    height: 20px;
    cursor: pointer;

    .lock-bar {
      position: absolute;
      top: -3px;
      right: 15px;
      width: 52px;
      height: 67px;
      background-position: 0 -380px;

      .lock {
        position: absolute;
        top: 5px;
        left: 50%;
        transform: translateX(-50%);
        width: 18px;
        height: 18px;
        background-position: ${({isPlayBarLocked}) => isPlayBarLocked ? "-100px -380px" : "-80px -380px"};

        &:hover {
          background-position: ${({isPlayBarLocked}) => isPlayBarLocked ? "-100px -400px" : "-80px -400px"};
        }
      }
    }
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }

  // .song-list {
    //     // display: ${props => props.isShowSongList ? "block" : "none"};
  //   position: absolute;
  //   z-index: 98;
    //   bottom: ${props => props.isShowSongList ? "50px" : "-301px"};
  //   left: 50%;
  //   transform: translateX(-50%);
  //   width: 986px;
  //   height: 301px;
  //   background-color: lightpink;
  //   transition: bottom 1s linear;
  // }
`

export const Control = styled.div`
  display: flex;
  align-items: center;

  .prev, .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;

    &:hover {
      background-position-x: -30px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${props => props.isPlaying ? "-165px" : "-204px"};

    &:hover {
      background-position-x: -40px;
    }
  }

  .next {
    background-position: -80px -130px;

    &:hover {
      background-position-x: -110px;

    }
  }
`

export const PlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    position: relative;
    width: 34px;
    height: 35px;
    border-radius: 5px;
    .msk{
      position: absolute;
      top: 0px;
      left: 0px;
      display: block;
      width: 34px;
      height: 35px;
      background-position: 0 -80px;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin-right: 10px;
        cursor: auto;

        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
          cursor: auto;

          &:hover {
            background-position-y: -280px;
          }

          &:focus {
            box-shadow: none;
          }
        }
      }

      .time {
        .now-time {
          color: #e1e1e1;
        }

        .divider {
          margin: 0 3px;
        }
      }
    }

    .lyric-tip {
      position: fixed;
      left: 50%;
      bottom: 60px;
      transform: translateX(-50%);
      padding: 10px 16px;
      border-radius: 5px;
      font-size: 15px;
      color: white;
      background-color: rgba(0, 0, 0, .5);
      cursor: auto;
      transition: all .3s linear;
    }
  }

`

export const Operator = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 2px;

  .btn {
    width: 25px;
    height: 25px;
  }

  .favor,
  .share {
    background-position-y: -163px;

    &:hover {
      background-position-y: -189px;
    }
  }

  .favor {
    background-position-x: -88px;
  }

  .share {
    background-position-x: -114px;
  }

  //.favor {
  //  background-position: -88px -163px;
  //
  //  &:hover {
  //    background-position-y: -189px;
  //  }
  //}
  //
  //.share {
  //  background-position: -114px -163px;
  //
  //  &:hover {
  //    background-position-y: -189px;
  //  }
  //}

  .left {
    height: 25px;
    padding-right: 5px;
  }

  .right {
    display: flex;
    position: relative;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume-bar {
      position: absolute;
      top: -125px;
      left: 9px;
      width: 32px;
      height: 113px;
      background-position: 0 -503px;
      padding: 3px 0;
      //display: ${props => props.isVolShow ? "block" : "none"};

      .ant-slider {
        height: 94px;
        //box-sizing: border-box;
        //width: 493px;
        //margin-right: 10px;
        //cursor: auto;

        .ant-slider-rail {
          background-color: transparent;
          height: 9px;
            //background: url(${require("@/assets/img/progress_bar.png")}) right 0;
        }

        .ant-slider-track {
          width: 4px;
          //height: 9px;
          background: url(${require("@/assets//img/playbar_sprite.png")}) -40px bottom;
        }

        //
        .ant-slider-handle {
          width: 18px;
          height: 20px;
          border: none;
          margin-top: -7px;
          background: url(${require("@/assets/img/sprite_icon.png")}) -42px -250px;
          cursor: auto;

          &:hover {
            background-position-y: -280px;
          }

          &:focus {
            box-shadow: none;
          }
        }
      }
    }

    .volume {

      background-position: ${props => props.volume === 0 ? "-108px -69px" : "-2px -248px"};

      &:hover {
        background-position: ${props => props.volume === 0 ? "-130px -69px" : "-31px -248px"};

        //background-position-x: ;
      }
    }
  }

  .loop {
    background-position: ${props => {
      switch (props.sequence) {
        case 1:
          return "-66px -248px";
        case 2:
          return "-66px -344px";
        default:
          return "-3px -344px";
      }
    }};

    &:hover {
      background-position-x: ${props => {
        switch (props.sequence) {
          case 0:
            return "-33px"
          default:
            return "-93px"
                // default
        }
      }
      };
    }
  }

  .playlist {
    padding-left: 18px;
    text-align: center;
    color: #666;
    width: 59px;
    line-height: 27px;
    text-decoration: none;
    background-position: -42px -68px;
    user-select: none;

    &:hover {
      background-position-y: -98px;
    }
  }
`

// export const SongListWrapper = styled.div`
//
// `;
