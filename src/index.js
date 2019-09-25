import React from 'react';
import { render } from 'react-dom';
import App from 'cerebral';
import { Container } from '@cerebral/react';
import AppComponent from './components/App';
import main from './main';

const app = App(main);

render(
  <Container app={app}>
    <AppComponent />
  </Container>,
  document.querySelector('#app')
);
