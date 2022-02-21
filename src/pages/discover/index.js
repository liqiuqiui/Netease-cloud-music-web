import React, { memo, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';

import { DiscoverWrapper, NavMenu } from './style';

import { discoverMenu } from '../../common/local-data';
import { NavLink } from 'react-router-dom';

// import request from '../../services/request';

export default memo(function LDiscover(props) {

  const { route } = props
  return (
    <div>
      <DiscoverWrapper>
        <div className="nav wrap-v1">
          <NavMenu>
            {
              discoverMenu.map(item => {
                return (
                  <li key={item.title}><NavLink exact={true} to={item.link} >{item.title}</NavLink></li>
                )
              })
            }
          </NavMenu>
        </div>
      </DiscoverWrapper>
      {/* LDiscover子路由 */}
      {
        renderRoutes(route.routes)
      }
    </div>
  )
})
