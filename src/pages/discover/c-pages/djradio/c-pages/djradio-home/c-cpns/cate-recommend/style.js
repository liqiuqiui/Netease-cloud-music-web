import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 35px;

  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;

    .item-list {
      display: flex;
      width: 435px;
      height: 160px;
      padding: 20px 0;
      column-gap: 20px;
      flex-wrap: wrap;
      border-top: 1px solid #ccc;

      &:nth-of-type(1),
      &:nth-of-type(2) {
        border: none;
      }

      .item-left {
        img {
          width: 120px;
        }
      }

      .item-right {
        flex: 1;

        .title {
          margin: 16px 0;
          text-wrap: normal;

          a {
            font-size: 18px;
            color: #333;
            text-wrap: normal;
          }
        }

        .desc {
          color: #999;
        }

        //margin-left: 20px;
      }
    }
  }
`;
