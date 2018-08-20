// import DataLoader from 'dataloader';
import logger from '../config/logger'
import fetch from 'node-fetch';
import config from '../config/appconfig'

function fetchResponseByURL(relativeURL) {

  console.log(`Fetching from ${config.MERCHANT_APP_URL}${relativeURL}`)

  return fetch(`https://api.myjson.com/bins/8lwqk`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(error => { console.log('request failed'); });

}

const rest = {
  fetchResponseByURL
}

export default rest
