import styled from 'styled-components';

export const BannerWrapper = styled.div`
  background: url(${props => props.imgUrl}) center center/6000px;

  .banner{
    display: flex;
    position: relative;
    height: 285px;
    //background-color: pink;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;
  .banner-item{
    img{
      height: 285px;
    }
  }
`;

export const BannerRight = styled.div`
  flex: 1;
  background-image: url(${require('@/assets/img/download.png')});
`;

export const BannerControl = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .btn{
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    width: 37px;
    height: 63px;
    /* background-color: pink; */
    span{
      display: block;
      width: 100%;
      height: 100%;
        background: url(${require('@/assets/img/banner_sprite.png')}) no-repeat;
    }
    

    &.left{
      left: -68px;
      >span{
        background-position: 0 -360px;
      }
      &:hover >span{
        background-position: 0 -430px;
      }
    }
    &.right{
      right: -68px;
      >span{
        background-position: 0 -508px;
      }
      &:hover >span{
        background-position: 0 -578px;
      }
    }
    .icon{
      width: 37px;
      height: 63px;
      /* color: red; */
    }
  }
`;
