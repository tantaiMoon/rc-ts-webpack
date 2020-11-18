import * as React from 'react';
import * as ReactDOM from 'react-dom';

let root = document.getElementById('root');

let props = { className: 'title' };

let el = React.createElement('div', props, 'hello! react+ts+webpack travis-ci');
ReactDOM.render(el, root);