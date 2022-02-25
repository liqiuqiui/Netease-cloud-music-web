import styled from "styled-components";

export const Wrapper = styled.div`
  //background: #fff;

  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 33px;

    .dj-radio-item {
      width: 70px;
      height: 70px;
      margin-bottom: 25px;

      a {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        color: #888;
        text-decoration: none;
        border-radius: 4px;

        &.active {
          background-position: -70px 0 !important;
          color: #d35757 !important;

          .icon {
            background-position-x: -48px;
          }
        }

        &:hover {
          background-position: 0 0;
        }

        .icon {
          width: 48px;
          height: 48px;
          background-position: 0 0;
        }

        span {
          text-align: center;
        }
      }


    }
  }

`;
