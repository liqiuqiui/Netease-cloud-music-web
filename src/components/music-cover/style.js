import styled from 'styled-components';

export const LMusicCoverWrapper = styled.div`
  width: 140px;
  height: 204px;

  .cover {
    position: relative;
    width: 140px;
    height: 140px;

    .mask {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;
    }


    .bottom {
      position: absolute;
      display: flex;
      align-items: center;
      bottom: 0;
      width: 140px;
      height: 27px;
      background-position: 0 -537px;
      /* border: 1px solid #000; */

      .headset {
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
        margin: 0 5px 0 10px;
      }

      .count {
        margin-top: 2px;
        color: #ccc;
      }

      .play {
        position: absolute;
        right: 10px;
        width: 16px;
        height: 17px;
        background-position: 0 0;
        text-indent: -9999px;

        &:hover {
          background-position: 0 -60px;
        }
      }
    }
  }

  .desc {

    margin: 8px 0 3px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    > a {
      color: #000;
    }
    .dj{
      display: inline-block;
      position: relative;
      top: -1px;
      margin-right: 3px;
      vertical-align: middle;
      width: 35px;
      height: 15px;
      background-position: -31px -658px;
    }
  }

  .auth {
    > span {
      color: #999;
      margin-right: 2px;
    }

    > a {
      color: #666;
    }
  }
`;

