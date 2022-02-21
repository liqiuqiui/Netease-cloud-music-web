import styled from "styled-components";

export const Wrapper = styled.div`
  ul {
    //margin-top: 25px;
    margin: 25px 0;
    li {
      margin-top: 15px;
      display: flex;
      column-gap: 10px;

      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        .top {
          color: #000;
          font-size: 14px;
        }
      }
    }
  }
`;
