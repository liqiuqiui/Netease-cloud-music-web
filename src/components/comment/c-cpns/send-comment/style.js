import styled from "styled-components";

export const SendCommentWrapper = styled.div`
  margin-bottom: 20px;

  .title {
    border-bottom: 2px solid #c20c0c;
    display: flex;
    align-items: baseline;

    h3 {
      font-size: 20px;
    }

    span {
      margin-left: 15px;
      color: #666;
    }
  }

  .content {
    display: flex;
    column-gap: 10px;
    margin-top: 20px;

    .left {
      img {
        height: 50px;
        width: 50px;
      }
    }

    .right {
      flex: 1;
      position: relative;

      .text {
        i {
          position: absolute;
          left: -4px;
          top: 14px;
          border: 1px solid #cdcdcd;
          border-right: none;
          border-bottom: none;
          border-top-left-radius: 2px;
          width: 8px;
          height: 8px;
          transform: rotateZ(-45deg);
          background-color: #fff;
        }

        textarea {
          padding: 5px;
          height: 60px;
          width: 100%;
          border: 1px solid #cdcdcd;
          resize: none;


          &::-webkit-scrollbar {
            width: 0;
          }
        }
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        &-left {
          display: flex;
          column-gap: 10px;

          i {
            width: 18px;
            height: 18px;
            background-position-y: -490px;
            cursor: pointer;
          }

          .emoji {

            background-position-x: -40px;
          }

          .at {
            background-position-x: -60px;

          }
        }

        &-right {
          display: flex;
          column-gap: 10px;
          line-height: 25px;
          color: #999;

          button {
            width: 46px;
            height: 25px;
            background-position: -84px -64px;
            color: #fff;
            text-align: center;
            cursor: pointer;

            &:hover {
              background-position-y: -94px;
            }
          }
        }
      }
    }
  }
`;
