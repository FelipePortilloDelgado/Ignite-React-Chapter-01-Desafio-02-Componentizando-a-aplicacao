


import React, { useContext, useState} from 'react'

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { GenreProvider } from './contexts/GenreContext'


import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';





export function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <GenreProvider genreId={1}>
        <SideBar />
        <Content />
      </GenreProvider>
    </div>
  )
}