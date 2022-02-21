import styled from "styled-components";

export const UserProfileWrapper = styled.div`
  background-position: 0 0;
  height: 126px;

  .my-info {
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
  }

  .btn {
    display: block;
    margin: 0 auto;
    height: 31px;
    line-height: 31px;
    text-align: center;
    width: 100px;
    color: #fff;
    text-decoration: none;
    text-shadow: 0 1px 0 #8a060b;
    background-position: 0 -195px;

    &:hover {
      background-position-x: -110px;
    }
  }
`;
