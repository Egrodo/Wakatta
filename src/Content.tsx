import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import type { InitialState } from './store/initialState';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';

// Handle pagination and global state
function Content() {
  const currPage = useSelector((state: InitialState) => state.currPage);
  function getPageComponent(page) {
    switch (page) {
      case 'home':
        return HomePage;
      case 'game':
        return GamePage;
      default:
        return HomePage;
    }
  }
  const [PageComponent, setPageComponent] = useState(
    getPageComponent(currPage)
  );

  useEffect(() => {
    console.log(`Rendering the ${currPage} page.`);
    setPageComponent(getPageComponent(currPage));
  }, [currPage]);

  return <main className="pageContainer">{PageComponent}</main>;
}

export default Content;
