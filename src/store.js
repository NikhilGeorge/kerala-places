import Vuex from 'vuex';
import Vue from 'vue'

import placesDetaisl from './data/placesDetails';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      count: 100,
      places: placesDetaisl,
      dist: 'Please select a district !',
      lat: ''
    },
    mutations: {
      increment (state) {
        state.count++
      },
      setDistrict (state, dist){
          state.dist = dist;
      },
      setLat (state, lat){
        state.lat = lat;
      }
    }, 
    getters: {
      getPlaceById: (state) => (id) => {
        return state.places.find(place => place.id === id)
      }
    }
});

export default store;