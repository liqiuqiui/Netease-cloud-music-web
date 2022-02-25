import styled from "styled-components";

export const Wrapper = styled.div`
  width: 426px;


  .recommend-list {
    border: solid #ccc;
    border-width: 0 1px;

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

        &-left {
          width: 40px;
          height: 40px;
          position: relative;

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

        &-center {
          width: 254px;

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

        &-right {
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
