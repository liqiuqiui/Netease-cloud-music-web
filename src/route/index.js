import React from 'react'
import { Redirect } from 'react-router-dom';


import LDiscover from '../pages/discover';
import LRecommend from '../pages/discover/c-pages/recommend';
import LTopList from '../pages/discover/c-pages/top-list';
import LPlayList from '../pages/discover/c-pages/playlist';
import LDjRadio from '../pages/discover/c-pages/djradio';
import LArtist from '../pages/discover/c-pages/artist';
import LAlbum from '../pages/discover/c-pages/album';
import LSongDetail from "../pages/discover/c-pages/song-detail";

import LMine from '../pages/mine';
import LFriend from '../pages/friend';

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to='/discover'/>
  },
  {
    path: '/discover',
    component: LDiscover,
    routes: [
      {
        path: '/discover',
        exact:true,
        render: () => <Redirect to="/discover/recommend"/>
      },
      {
        path: '/discover/recommend',
        component: LRecommend,
      },
      {
        path: '/discover/toplist',
        component: LTopList
      },
      {
        path: '/discover/playlist',
        component: LPlayList
      },
      {
        path: '/discover/djradio',
        component: LDjRadio
      },
      {
        path: '/discover/artist',
        component: LArtist
      },
      {
        path: '/discover/album',
        component: LAlbum
      },
      {
        path: "/discover/song-detail/:id",
        render: (routeProps) => {
          if (routeProps.match.params.id === "undefined")
            routeProps.history.goBack();
          return <LSongDetail/>
        }
      }
    ]
  },
  {
    path: '/profile',
    component: LMine
  },
  {
    path: '/friend',
    component: LFriend
  },

]


export default routes
