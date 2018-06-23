import axios from 'axios';
import { upsertRide, errorRide } from 'ride-viewer/actions'

async function getRide(token) {
  return await axios.get(`https://dev-api.wheely.com/trip/v1/rides/${token}`);
}

export default class {
  constructor(store) {

    // getRide("8xeapvkBiAg6").then(({ data }) => {
    getRide("8xeapvkBiAg61").then(({ data }) => {
      const ride = data.ride;
      store.dispatch(upsertRide(ride));
    }, (error) => {      
      store.dispatch(errorRide(error.message));
    });
  }
}