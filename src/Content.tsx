import React, { useEffect, useState } from 'react';
import './Content.css';
import { useSelector } from 'react-redux';
import type { InitialState } from './store/initialState';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';

// Handle pagination and global state
function Content() {
  const currPage = useSelector((state: InitialState) => state.currPage);
  const ComponentToRender =
    {
      home: HomePage,
      game: GamePage,
    }[currPage] ?? HomePage;

  return (
    <main className="pageContainer">
      <ComponentToRender />
    </main>
  );
}

export default Content;
