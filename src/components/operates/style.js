import styled from "styled-components";

export const Wrapper = styled.div`
  //.operates {
    display: flex;
    margin-bottom: 25px;

    div {
      margin-right: 6px;
      height: 31px;
      line-height: 31px;
      padding-right: 4px;
      font-family: simsun, \\5b8b\\4f53;
      background-position: right -1020px;
      cursor: pointer;

      i {

        display: inline-block;
        height: 31px;
        line-height: 30px;
        min-width: 23px;
        padding-right: 2px;
        padding-left: 28px;
        background-position-x: 0;
      }
    }

    div:nth-of-type(1) {
      width: 66px;
      background-position: right -428px;
      margin-right: 0;
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;

      i {
        line-height: 31px;
        overflow: hidden;
        vertical-align: top;
        text-align: center;
        background-position-y: -387px;
        padding: 0 7px 0 8px;

        em {
          float: left;
          width: 20px;
          height: 18px;
          margin: 6px 2px 2px 0;
          background-position: 0 -1622px;
          overflow: hidden;
        }
      }

      &:hover {
        background-position-y: -510px;

        i {
          background-position-y: -469px;
        }

        em {
          background-position-x: -28px;
        }
      }

      &:active {
        background-position-y: -592px;

        i {
          background-position-y: -551px;
        }

        em {
          background-position-x: -56px;
        }
      }


    }

    div:nth-of-type(2) {
      width: 31px;
      margin-left: -3px;
      padding-right: 0;
      background-position: 0 -1588px;

      &:hover {
        background-position-x: -40px;
      }

      &:active {
        background-position-x: -80px;
      }
    }

    div:nth-of-type(3) {
      i {
        background-position-y: -977px;
      }
    }

    div:nth-of-type(4) {
      i {
        background-position-y: -1225px;
      }
    }

    div:nth-of-type(5) {
      i {
        background-position-y: -2761px;

      }
    }

    div:nth-of-type(6) {
      i {
        background-position-y: -1465px;
      }
    }
  //}
`;
