import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  .content{
    height: 70px;
    /* background-color: #fff; */
    display: flex;
    justify-content: space-between;
  }

  .divider{
    height:5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display:flex;

  >h1{
    width: 177px;
    height: 100%;
    background-position: 0 0!important;

    >a{
      display: block;
      width: 177px;
      height: 100%;
      text-indent: -999px;
    }
  }

  ul{
    display: flex;
    width: 508px;

    li{
      position: relative;
      cursor: pointer;

      a{
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 0 19px;
        font-size: 14px;
        color: #ccc;
        text-decoration: none;


        &:hover,&.active{
          background-color: #000;
          color: #fff;
        }
        &.active::after{
          width: 12px;
          height: 7px;
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -226px 0;
        }
      }
      &:last-child a::before{
          width: 28px;
          height: 19px;
          content: '';
          position: absolute;
          left:100px;
          top: 21px;
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -190px 0;
        }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  .search {
    width: 158px;
    height:32px;
    border-radius: 16px;

    input {
      outline-color: #fff!important;
      &::placeholder{
        font-size: 12px
      }
    }
  }

  .center{
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #4f4f4f;
    border-radius: 16px;
    margin: 0 16px;
    color: #ccc;

    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }
  >a{
    color: #787878;
  }
`