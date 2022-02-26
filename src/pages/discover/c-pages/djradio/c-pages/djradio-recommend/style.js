import styled from "styled-components";

export const Wrapper = styled.div`
  .list-header {
    height: 42px;
    border-bottom: 2px solid rgb(194, 12, 12);
    display: flex;

    .title {
      font-size: 24px;
    }

    span {
      margin: 13px 0 0 10px;
      color: #999;
    }
  }

  .list {
    border: 1px solid #e2e2e2;
    border-top: none;

    ul {
      .list-item {
        height: 60px;
        padding: 10px 0 10px 20px;
        display: flex;
        column-gap: 10px;
        align-items: center;

        &:hover {
          background-color: #eee !important;
        }

        &:hover .icon {
          display: block;
        }

        &:nth-child(even) {
          background-color: #f7f7f7;
        }

        &-image {
          width: 40px;
          height: 40px;
          position: relative;
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

        &-name {
          width: 304px;

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

        &-desc {
          width: 166px;
        }

        &-listener {
          color: #999;
          width: 90px;
        }

        &-like {
          color: #999;
          width: 126px;
        }

        &-cate {
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
    }
  }
`;
