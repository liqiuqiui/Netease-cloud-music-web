import React from 'react'
import { Redirect, useParams } from 'react-router-dom';


import LDiscover from '../pages/discover';
import LRecommend from '../pages/discover/c-pages/recommend';
import LTopList from '../pages/discover/c-pages/top-list';
import LPlayList from '../pages/discover/c-pages/play-list';
import LDjRadio from '../pages/discover/c-pages/djradio';
import LArtist from '../pages/discover/c-pages/artist';
import LAlbum from '../pages/discover/c-pages/album';
import LSongDetail from "../pages/discover/c-pages/song-detail";

import LMine from '../pages/mine';
import LFriend from '../pages/friend';

// const routes = [
//   {
//     path: '/',
//     exact: true,
//     render: () => (<Redirect to='/discover'/>)
//     // component: LDiscover
//   },
//   {
//     path: '/discover',
//     component: LDiscover,
//     routes: [
//       {
//         path: '/discover',
//         exact: true,
//         render: () => <Redirect to='/discover/recommend'/>
//       },
//       {
//         path: '/discover/recommend',
//         component: LRecommend,
//       },
//       {
//         path: '/discover/toplist',
//         component: LTopList
//       },
//       {
//         path: '/discover/playlist',
//         component: LPlayList
//       },
//       {
//         path: '/discover/djradio',
//         component: LDjRadio
//       },
//       {
//         path: '/discover/artist',
//         component: LArtist
//       },
//       {
//         path: '/discover/album',
//         component: LAlbum
//       },
//       {
//         path: "/discover/song-detail/:id",
//         render: (routeProps) => {
//           // const res = routeProps.location.search.matchAll(/(\w+(?==))=((?<==)\w+,*\w+)/ig)
//           // const params = {};
//           // for (const item of res) {
//           //   if(item[2].includes(","))
//           //     params[`${item[1]}`] = item[2].split(",");
//           //   else params[`${item[1]}`] = item[2];
//           // }
//           // // console.log(routeProps)
//           // if(params.id+""==="undefined") routeProps.history.goBack();
//           // console.log(routeProps.match.params)
//           if (routeProps.match.params.id === "undefined")
//             routeProps.history.goBack();
//           // useParams();
//           return <LSongDetail/>
//         }
//         // component: LSongDetail
//       }
//     ],
//
//   },
//   {
//     path: '/profile',
//     component: LMine
//   },
//   {
//     path: '/friend',
//     component: LFriend
//   }
// ]
const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to='/discover'/>
  },
  {
    path: '/discover',
    // exact: true,
    component: LDiscover,
    routes: [
      // {
      //   path: '/',
      //   // component: LRecommend,
      //   exact: true,
      //   render: () => <Redirect to='/discover'/>
      // },
      {
        path: '/discover',
        exact: true,
        component: LRecommend,
      },
      {
        path: '/discover/toplist',
        // exact: true,
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
    // exact: true,
    component: LMine
  },
  {
    path: '/friend',
    // exact: true,
    
    component: LFriend
  },

]


export default routes
