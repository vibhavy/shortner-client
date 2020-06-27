import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { urlParam, getData } from './helper/Utlis';

// load page
let load = false;

(async function () {
  let urlData = urlParam();
  if(urlData.length === 0) {
    load = true;
    return;
  }

  // do continue is slug is not present
  let slug = urlData[1] ? urlData[1] : null;
  if(!slug) {
    load = true;
    return;
  }

  // get data against the slug
  let res = await getData(`/url/${slug}`);
  if(res && res.data && res.data.url) {
      window.location.assign(res.data.url);
      return;
  } else {
    load = true
  }
})();

if(load) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
