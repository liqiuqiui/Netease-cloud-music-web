import styled from "styled-components";

export const CommentItemWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  padding: 15px 0;
  border-top: 1px dotted #ccc;

  .item-left {
    .avatar {
      height: 50px;
      width: 50px;
    }
  }

  .item-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-middle {
      padding: 8px 19px;
      margin-top: 10px;
      line-height: 20px;
      background: #f4f4f4;
      border: 1px solid #dedede;
      word-break: break-word;
    }

    &-top, &-middle {
      //display: flex;
      .commenter {
        color: #0c73c2;
      }

      a, img {
        margin-right: 5px;
      }

      img {
        width: auto;
        height: 12px;
      }
    }

    &-bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;

      .time {
        color: #999;
      }

      .operates {
        i {
          display: inline-block;
          width: 15px;
          height: 14px;
          background-position: -150px 0;
          vertical-align: -2px;
          margin-right: 8px;
        }

        span {
          color: #ccc;
          margin: 0 8px;
        }
      }
    }
  }
`;
