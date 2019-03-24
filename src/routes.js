import React from 'react';
import Layout from './containers/Layout';

const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Layout },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
];

export default routes;
