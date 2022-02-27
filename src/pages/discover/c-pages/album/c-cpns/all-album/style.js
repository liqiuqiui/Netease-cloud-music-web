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

    .area-list {
      align-self: flex-end;
      margin-bottom: 8px;
      margin-left: 20px;

      .line {
        margin: 0 6px;
        color: #c7c7c7;
      }

      a {
        padding: 2px 5px;
        border-radius: 3px;
      }

      a.active {
        background-color: #c20c0c;
        color: #fff;
      }
    }
  }

  .album-list { {
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
  }
`;
