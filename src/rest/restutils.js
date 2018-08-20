// import DataLoader from 'dataloader';
import log from '../config/logger'
import fetch from 'node-fetch';
import config from '../config/appconfig'
// var rp = require('request-promise');

function fetchResponseByURL(relativeURL) {
  // return rp(`${config.MERCHANT_APP_URL}${relativeURL}`)
  //   .then((res) => {
  //     console.log("res: " + res)
  //     return JSON.parse(res);
  //     // const data = JSON.parse(res)
  //     //
  //     // if(data.merchant)
  //     //   return data.merchant
  //     // throw `Merchant not defined @ ${config.MERCHANT_APP_URL}${relativeURL}`
  //   })
  //   .catch((err) => log.error(err));


    return fetch(`${config.MERCHANT_APP_URL}${relativeURL}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    })
    .then(response => {
      if (response.ok) {
        console.log(response);
        return response.json();
      }
    })
    .catch(error => { console.log('request failed'); });

}

// const merchantLoader = new DataLoader(
//   urls => Promise.all(urls.map(fetchResponseByURL))
// );
//
// function fetchPersonByURL(relativeURL) {
//   return fetchResponseByURL(relativeURL).then(json => json.person);
// }

const rest = {
  fetchResponseByURL
}

export default rest
