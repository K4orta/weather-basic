import React from 'react';
import App from './components/app';
import data from 'json!./five-day-data.json';

React.render(
	<App days={data} />, 
	document.querySelector('.container')
);

// console.log(React.renderToStaticMarkup(<App days={data} />));