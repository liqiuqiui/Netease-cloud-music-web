import styled from "styled-components";

export const Wrapper = styled.div`
  .excellent-new-radio {
    .new-radio-list {
      display: flex;
      column-gap: 37px;
      padding-top: 16px;

      &-item {
        width: 150px;

        img {
          width: 150px;
          height: 150px;
        }

        .title {
          margin: 13px 0 6px;
          line-height: 16px;
          font-size: 14px;
          font-weight: normal;
        }

        p {
          line-height: 18px;
          color: #999;
        }
      }
    }
  }

  .radio-rank {
    margin-top: 35px;

    .line {
      margin: 0 10px;
      color: #c7c7c7;
    }

    .rank-list {
      display: flex;
      flex-wrap: wrap;
      column-gap: 30px;

      &:nth-of-type(1),
      &:nth-of-type(2) {
        border: none;
      }

      &-item {
        display: flex;
        width: 435px;
        height: 160px;
        padding: 20px 0;
        column-gap: 20px;
        flex-wrap: wrap;
        border-top: 1px solid #ccc;

        &-left {
          img {
            width: 120px;
          }
        }

        &-right {
          flex: 1;
          overflow: hidden;

          .title {
            height: 64px;
            margin: 0;
            line-height: 64px;
            font-weight: bold;

            a {
              font-size: 18px;
              color: #333;
            }
          }

          .author {
            .user-icon {
              display: inline-block;
              width: 14px;
              height: 15px;
              background-position: -50px -300px;
              vertical-align: middle;
            }

            .name {
              margin: 0 5px;
            }

            img {
              height: 13px;
              width: 13px;
              display: inline-block;
              vertical-align: middle;
            }
          }

          .info {
            margin-top: 6px;
            color: #999;
          }
        }
      }
    }
  }
`;
