import styled from 'styled-components';

export const ThemeHeaderWrapper = styled.div`
  box-sizing: content-box;
  height: 34px;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid #c10d0c;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left{
    display: flex;
    align-items: center;
    >h3{
      position: relative;
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
      height: 34px;

      >a{
        color: #333;
      }

      >i{
        position: absolute;
        left: -34px;
        width: 34px;
        height: 34px;
        background-position: -225px  -156px;
      }

      a:hover{
        text-decoration: none;
      }
    }

    .keyword{
      margin-left: 20px;

      .divider{
        margin: 0 10px;
        color: #ccc;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    
    >span{
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
  
`;