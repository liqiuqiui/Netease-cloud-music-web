import styled from "styled-components";

export const SingerWrapper = styled.div`
  margin-top: 15px;
  padding: 20px;

  .recruit a {
    margin: 14px auto 0;
    display: block;
    width: 205px;
    height: 31px;
    text-align: center;
    line-height: 31px;
    color: #333;
    font-weight: bold;
    border: 1px solid #c3c3c3;
    border-radius: 4px;
    background-color: #f9f9f9;
    text-decoration: none;

    :hover {
      background-color: #fdfdfd;
    }
  }
`;

export const SingerInfoItem = styled.li`
  margin-top: 14px;
  display: flex;
  width: 210px;
  height: 62px;
  background-color: #fafafa;
  cursor: pointer;

  &:hover {
    background-color: #f4f4f4;
  }

  .head, .head img {
    width: 62px;
    height: 62px;
  }

  .ifo {
    flex: 1;
    border: 1px solid #e9e9e9;
    border-left: none;
    padding-left: 14px;

    .alias {
      margin-top: 8px;
      font-weight: bolder;
      font-size: 14px;
    }

    .name {
      margin-top: 8px;
    }
  }
`;
