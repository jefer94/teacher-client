//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
//include your index.scss file into the bundle
import '../styles/index.scss';
import './utils/icons';

var packg = require('../../package.json');
console.info("BreatheCode Teacher Platform",packg.version, process.env.ENVIRONMENT);



//import your own components
import Layout from './Layout.jsx';

ReactDOM.render(
  <Layout />,
  document.getElementById('app')
);