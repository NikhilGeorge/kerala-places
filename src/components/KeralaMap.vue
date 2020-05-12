<template>

<div style="height: 800px; width: 50%">

      
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />

      <l-marker v-for="place in markedPlaces" :key="place.district" :lat-lng="getLatAndLong(place.latitude, place.longitude)" >
        <l-tooltip :options="{ permanent: true, interactive: true }">
            <v-btn small color="primary" dark @mouseenter="innerClick(place.district)"> {{ place.district }}</v-btn>
  
        </l-tooltip>
      </l-marker>
 
    </l-map>
     Place is
      <li >
          {{ currentPlace }}
      </li>
    {{markedPlaces}}
  </div>

</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";
import districtGeoLocation from "../data/districtGeoLocation";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  data() {
    return {
      zoom: 8,
      center: latLng(9.5915668, 76.5221531),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(9.5915668, 76.5221531),
      withTooltip: latLng(9.5915668, 76.5221531),
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true,
      markedPlaces : districtGeoLocation,
      currentPlace: '',
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick(place) {
      this.currentPlace = place;
    },
    getLatAndLong(la,lo){
        return latLng(la, lo);
    }
  }
};
</script>

<style>

</style>
