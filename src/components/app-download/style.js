import styled from "styled-components";

export const AppDownLoadWrapper = styled.div`
  //margin-top: 20px;
  margin: 20px 0 30px 0;

  ul {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    //padding: 0 5px;
    margin-bottom: 30px;
    height: 65px;
    background-position-y: -392px;

    li > a {
      text-indent: -999999px;
      display: block;
      width: 42px;
      height: 48px;
    }

    .ios:hover {
      background-position-y: -472px;
    }

    .pc:hover {
      background-position: -79px -472px;
    }

    .android:hover {
      background-position: -158px -472px;
    }
  }

  > span {
    color: #999;
  }
`;
