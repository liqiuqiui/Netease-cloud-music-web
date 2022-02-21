import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  height: 30px;
  background-color: #c20c0c;

  .nav{
    height: 100%;
    padding-left: 180px;
  }
`
export const NavMenu = styled.ul`
  height: 100%;
  display: flex;

  li{
    height: 100%;
    cursor: pointer;

    a{
      color: #fff;
      display: block;
      text-align: center;
      padding: 1px 13px;
      margin: 2px 17px 0 17px;
      border-radius: 20px;

      &.active{
        text-decoration: none;
        background-color: #9B0909;
      }
    }

    &:hover a{
        text-decoration: none;
        background-color: #9B0909;
      }
    
  }
  
`