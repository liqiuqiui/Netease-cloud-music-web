import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter , BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './route';
import store from './store/index';


import '@/assets/css/reset.css';
import LAppHeader from './components/app-header';
import LAppFooter from './components/app-footer';
import LAppPlayerBar from "./pages/player/app-player-bar";


export default memo(function App() {
  

  // useDispatch()(changePlayListAction(useLocalStorage("playList")))
  
  
  return (
    <Provider store={store}>
      <HashRouter>
        <LAppHeader/>
        {renderRoutes(routes)}
        <LAppFooter/>
        <LAppPlayerBar/>
      </HashRouter>
    </Provider>
  
  )
})
