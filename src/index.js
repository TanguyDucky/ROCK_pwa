import React from 'react';
import { render } from 'react-dom';
import { Controller } from 'cerebral';
import { Container } from '@cerebral/react';
import AppComponent from './components/App';
import main from './main';
import Devtools from 'cerebral/devtools';

const app = Controller(main, {
  devtools: Devtools({
    host: '127.0.0.1:52001',
  }),
});

render(
  <Container controller={app}>
    <AppComponent />
  </Container>,
  document.querySelector('#app')
);

app.getSignal('initApp')();
