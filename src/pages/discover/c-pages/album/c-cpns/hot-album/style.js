import styled from "styled-components";

export const Wrapper = styled.div`

  .header {
    display: flex;
    height: 42px;
    border-bottom: 2px solid rgb(194, 12, 12);

    h3 {
      line-height: 42px;
      font-size: 24px;
    }
  }

  .list {
    display: flex;
    column-gap: 33px;
    flex-wrap: wrap;
    margin-top: 20px;

    .name {
      margin: 8px 0 3px;
      font-size: 14px;

      a {
        color: #000;
      }
    }
  }
`;
