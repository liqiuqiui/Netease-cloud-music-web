import styled from "styled-components";

export const SimilarSongWrapper = styled.div`
  .simi-item {
    display: flex;

    &-left {
      width: 156px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .song-auth > a {
        color: #999;
      }
    }

    &-right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      color: #a3a3a3;
      margin-left: 8px;

      .add-to {
        font-weight: bold;
        font-size: 15px;
      }

      i {
        cursor: pointer;
      }
    }
  }
`;
