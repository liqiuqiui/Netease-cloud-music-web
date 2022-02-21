import styled from "styled-components";

export const Wrapper = styled.div`
  width: 240px;
  margin-top: 40px;

  h2 {
    padding: 0 10px 12px 15px;
    font-size: 14px;
    color: #000;
    font-family: simsun, \\5b8b\\4f53;
    font-weight: bold;

    :nth-of-type(2) {
      margin-top: 20px;
    }
  }

  ul {
    li {
      padding: 10px 0 10px 20px;
      display: flex;
      column-gap: 10px;

      .left {
        width: 40px;

        img {
          height: 40px;
          width: 40px;
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &-top {
          color: #000;
        }

        &-bottom {
          color: #999;
        }
      }
    }
  }
`;
