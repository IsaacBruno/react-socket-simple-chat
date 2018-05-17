/*
  this file is used only to configure the react hmr support 
  through the react-hot-loader package
*/
import React from 'react';
import { hot } from 'react-hot-loader';

import Chat from 'chat';

const App = () => (
  <Chat />
);

export default hot(module)(App);