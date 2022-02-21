import React, { memo } from 'react'

import { headerLinks } from '@/common/local-data';

import { NavLink } from 'react-router-dom'
import { Input } from 'antd';
import { SearchOutlined }from '@ant-design/icons'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

export default memo(function LAppFooter() {
  // 业务代码
  function showItem(item, index) {
    if (index < 3) {
      return (
        <li key={item.title}>
          <NavLink  to={item.link}>{item.title}</NavLink>
        </li>
      )
    } else {
      return (
        <li key={item.title}>
          <a href={item.link}>{item.title}</a>
        </li>
      )
    }
  }

  // jsx
  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <h1 className='sprite_01'><a href="/#/" className="logo">网易云音乐</a></h1>
          <ul>
            {
              headerLinks.map((item, index) => showItem(item, index))
            }
          </ul>
        </HeaderLeft>
        <HeaderRight>
          <Input className='search' prefix={<SearchOutlined />} placeholder='音乐/视频/电台/用户' />
          <div className='center'>创作者中心</div>
          <a href="/#/">登录</a>
        </HeaderRight>
      </div>
      <div className='divider'></div>

    </HeaderWrapper>
  )
})
