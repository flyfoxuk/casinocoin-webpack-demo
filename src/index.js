import _ from 'lodash';
import { casinocoin } from '@casinocoin/libjs';

console.dir(Object.keys(require('@casinocoin/libjs')));
window.csc = casinocoin;



const CasinocoinAPI = require('@casinocoin/libjs').CasinocoinAPI;


const api = new CasinocoinAPI({
  server: 'wss://ws01.casinocoin.org:4443' // Public casniocoind server
});
api.connect().then(() => {

  const myAddress = 'cDarPNJEpCnpBZSfmcquydockkePkjPGA2';

  console.log('getting account info for', myAddress);
  return api.getAccountInfo(myAddress);

}).then(info => {
  console.log(info);
  console.log('getAccountInfo done');


}).then(() => {
  return api.disconnect();
}).then(() => {
  console.log('done and disconnected.');
}).catch(console.error);
