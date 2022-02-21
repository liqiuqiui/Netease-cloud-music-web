import styled from "styled-components";

export const HotRadioWrapper = styled.div`
  margin-top: 30px;
  padding: 20px;
`;
export const RadioItem = styled.li`
  display: flex;
  column-gap: 10px;
  height: 50px;
  cursor: pointer;

  .radio-avatar {
    width: 40px;
    height: 40px;
  }

  .radio-info {
    width: 160px;
    line-height: 21px;

    .name:hover {
      text-decoration: underline;
    }

    .desc {
      width: 100%;
      color: #666;
    }
  }
`;
