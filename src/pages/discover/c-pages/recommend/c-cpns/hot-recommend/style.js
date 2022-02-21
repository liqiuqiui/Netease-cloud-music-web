import styled from 'styled-components';

export const HotRecommendWrapper = styled.div`

  .recommend-list{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;

    .recommend-item{
      margin: 0 42px 30px 0;
      &:nth-child(4n) {
        margin-right: 0;
      }
      &:last-child(-n+4){
        margin-bottom: 0;
      }
    }
  }
`;